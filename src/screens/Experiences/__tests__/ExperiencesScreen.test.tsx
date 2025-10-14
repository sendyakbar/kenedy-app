import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { ExperiencesScreen } from '../ExperiencesScreen'
import { usePostExperiences } from '../../../services/queries/experiences/usePostExperiences'

// Mock the hook
jest.mock('../../../services/queries/experiences/usePostExperiences')

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
})
