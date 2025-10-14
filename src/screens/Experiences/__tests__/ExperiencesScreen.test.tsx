import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ExperiencesScreen } from '../ExperiencesScreen'
import { usePostExperiences } from '../../../services/queries/experiences/usePostExperiences'

// Mock the hook
jest.mock('../../../services/queries/experiences/usePostExperiences')

// Mock navigation
let mockNavigate: jest.Mock;
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  mockNavigate = jest.fn();
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

const minimalProps = {
    route: { key: 'experiences-key', name: 'ExperiencesScreen', params: { userId: 'asdf' } },
    navigation: {} as any,
  } as any;

describe('ExperiencesScreen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // Mock the hook to return a mutation function
        (usePostExperiences as jest.Mock).mockReturnValue({
            mutate: jest.fn(),
            isPending: false,
        });
    });

    it('renders header and one initial form', () => {
        const { getByText, getAllByText } = render(<ExperiencesScreen {...minimalProps} />)
        expect(getByText('Your Experience(s)')).toBeTruthy()
        // Expect at least the Role label to appear for the initial form
        expect(getAllByText('Role').length).toBeGreaterThanOrEqual(1)
    })

    it('adds and removes experience forms', () => {
        const { getByText, getAllByText } = render(<ExperiencesScreen {...minimalProps} />)

        const addBtn = getByText('Add Experience')
        fireEvent.press(addBtn)
        fireEvent.press(addBtn)
        // Now expect at least 3
        expect(getAllByText('Role').length).toBeGreaterThanOrEqual(3)
    })

    it('submits experiences on continue button press', () => {
        const mockMutate = jest.fn();
        (usePostExperiences as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isPending: false,
        });

        const { getByText } = render(<ExperiencesScreen {...minimalProps} />);
        
        const continueBtn = getByText('Continue');
        fireEvent.press(continueBtn);

        expect(mockMutate).toHaveBeenCalled();
    });

    it('handles remove button correctly for items after the first', () => {
        const { getByText, getAllByText, queryAllByText } = render(<ExperiencesScreen {...minimalProps} />);
        
        // Add two more experiences
        const addBtn = getByText('Add Experience');
        fireEvent.press(addBtn);
        fireEvent.press(addBtn);
        
        // Should have 3 forms now
        expect(getAllByText('Role').length).toBe(3);
        
        // Remove buttons should exist (2 for the 2nd and 3rd items)
        const removeButtons = queryAllByText('Remove');
        expect(removeButtons.length).toBe(2);
        
        // Press first remove button
        fireEvent.press(removeButtons[0]);
        
        // Should have 2 forms now
        expect(getAllByText('Role').length).toBe(2);
    });

    it('shows loading state when mutation is pending', () => {
        (usePostExperiences as jest.Mock).mockReturnValue({
            mutate: jest.fn(),
            isPending: true,
        });

        const { getByText } = render(<ExperiencesScreen {...minimalProps} />);
        
        // Just verify the component renders with loading state
        expect(getByText('Your Experience(s)')).toBeTruthy();
    });

    it('handles input changes correctly', () => {
        const { getByPlaceholderText, getAllByPlaceholderText } = render(<ExperiencesScreen {...minimalProps} />);
        
        const roleInput = getByPlaceholderText('e.g., Senior Software Engineer');
        fireEvent.changeText(roleInput, 'Developer');
        
        const domainInput = getByPlaceholderText('e.g., Fintech');
        fireEvent.changeText(domainInput, 'Tech');
        
        // Verify inputs are rendered
        expect(roleInput).toBeTruthy();
        expect(domainInput).toBeTruthy();
    });

    it('navigates to JobMatchesScreen on successful submission', () => {
        (usePostExperiences as jest.Mock).mockImplementation((options) => ({
            mutate: () => {
                // Simulate successful mutation
                if (options?.onSuccess) {
                    options.onSuccess();
                }
            },
            isPending: false,
        }));

        const { getByText } = render(<ExperiencesScreen {...minimalProps} />);
        
        const continueBtn = getByText('Continue');
        fireEvent.press(continueBtn);

        expect(mockNavigate).toHaveBeenCalledWith('JobMatchesScreen', { userId: 'asdf' });
    });
})
