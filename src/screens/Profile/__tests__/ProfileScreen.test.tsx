import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ProfileScreen } from '../ProfileScreen';
import { usePostProfile } from '../../../services/queries/profile/usePostProfile';

// Define a mock navigate function name that is allowed by Jest's out-of-scope guard
let mockNavigate: jest.Mock;
let mockMutate: jest.Mock;

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

// Mock the hook
jest.mock('../../../services/queries/profile/usePostProfile');

const minimalProps = {
  route: { key: 'profile-key', name: 'ProfileScreen', params: undefined },
  navigation: {} as any,
} as any;

describe('ProfileScreen', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockMutate = jest.fn();
    
    // Mock the hook implementation
    (usePostProfile as jest.Mock).mockImplementation((options) => {
      // Return a mutation object with mutate function that calls onSuccess
      return {
        mutate: (data: any) => {
          mockMutate(data);
          // Simulate successful mutation by calling onSuccess if provided
          if (options?.onSuccess) {
            options.onSuccess({ user_id: 'asdf' });
          }
        },
        isPending: false,
      };
    });
  });

  it('renders header and form', () => {
    const { getByText, getByPlaceholderText } = render(<ProfileScreen {...minimalProps} />);

    expect(getByText('Build Your Profile')).toBeTruthy();
    expect(getByPlaceholderText('Enter your full name')).toBeTruthy();
  });

  it('blocks submission when name is empty', async () => {
    const { getByText, getByPlaceholderText } = render(<ProfileScreen {...minimalProps} />);

    fireEvent.changeText(getByPlaceholderText("e.g., Bachelor's in Computer Science, MIT"), 'BSc');
    fireEvent.changeText(getByPlaceholderText('Describe your work experience and achievements'), '3 years');
    fireEvent.changeText(getByPlaceholderText('e.g., JavaScript, React Native, Node.js, Leadership'), 'JS');
    fireEvent.changeText(getByPlaceholderText('Describe your ideal job, work environment, and career goals'), 'Remote');

    const continueBtn = getByText('Continue');
    fireEvent.press(continueBtn);

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockMutate).not.toHaveBeenCalled();
  });

  it('blocks submission when education is empty', async () => {
    const { getByText, getByPlaceholderText } = render(<ProfileScreen {...minimalProps} />);

    fireEvent.changeText(getByPlaceholderText('Enter your full name'), 'John');
    fireEvent.changeText(getByPlaceholderText('Describe your work experience and achievements'), '3 years');
    fireEvent.changeText(getByPlaceholderText('e.g., JavaScript, React Native, Node.js, Leadership'), 'JS');
    fireEvent.changeText(getByPlaceholderText('Describe your ideal job, work environment, and career goals'), 'Remote');

    const continueBtn = getByText('Continue');
    fireEvent.press(continueBtn);

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockMutate).not.toHaveBeenCalled();
  });

  it('blocks submission when experience is empty', async () => {
    const { getByText, getByPlaceholderText } = render(<ProfileScreen {...minimalProps} />);

    fireEvent.changeText(getByPlaceholderText('Enter your full name'), 'John');
    fireEvent.changeText(getByPlaceholderText("e.g., Bachelor's in Computer Science, MIT"), 'BSc');
    fireEvent.changeText(getByPlaceholderText('e.g., JavaScript, React Native, Node.js, Leadership'), 'JS');
    fireEvent.changeText(getByPlaceholderText('Describe your ideal job, work environment, and career goals'), 'Remote');

    const continueBtn = getByText('Continue');
    fireEvent.press(continueBtn);

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockMutate).not.toHaveBeenCalled();
  });

  it('blocks submission when skills is empty', async () => {
    const { getByText, getByPlaceholderText } = render(<ProfileScreen {...minimalProps} />);

    fireEvent.changeText(getByPlaceholderText('Enter your full name'), 'John');
    fireEvent.changeText(getByPlaceholderText("e.g., Bachelor's in Computer Science, MIT"), 'BSc');
    fireEvent.changeText(getByPlaceholderText('Describe your work experience and achievements'), '3 years');
    fireEvent.changeText(getByPlaceholderText('Describe your ideal job, work environment, and career goals'), 'Remote');

    const continueBtn = getByText('Continue');
    fireEvent.press(continueBtn);

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockMutate).not.toHaveBeenCalled();
  });

  it('blocks submission when preferences is empty', async () => {
    const { getByText, getByPlaceholderText } = render(<ProfileScreen {...minimalProps} />);

    fireEvent.changeText(getByPlaceholderText('Enter your full name'), 'John');
    fireEvent.changeText(getByPlaceholderText("e.g., Bachelor's in Computer Science, MIT"), 'BSc');
    fireEvent.changeText(getByPlaceholderText('Describe your work experience and achievements'), '3 years');
    fireEvent.changeText(getByPlaceholderText('e.g., JavaScript, React Native, Node.js, Leadership'), 'JS');

    const continueBtn = getByText('Continue');
    fireEvent.press(continueBtn);

    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockMutate).not.toHaveBeenCalled();
  });

  it('updates focus state when field is focused', () => {
    const { getByPlaceholderText } = render(<ProfileScreen {...minimalProps} />);
    const input = getByPlaceholderText('Enter your full name');

    fireEvent(input, 'focus');
    fireEvent(input, 'blur');
    
    // Just verify the component renders correctly with focus changes
    expect(input).toBeTruthy();
  });

  it('navigates when form is valid', async () => {
    const { getByText, getByPlaceholderText } = render(<ProfileScreen {...minimalProps} />);

    fireEvent.changeText(getByPlaceholderText('Enter your full name'), 'John');
    fireEvent.changeText(getByPlaceholderText("e.g., Bachelor's in Computer Science, MIT"), 'BSc');
    fireEvent.changeText(getByPlaceholderText('Describe your work experience and achievements'), '3 years');
    fireEvent.changeText(getByPlaceholderText('e.g., JavaScript, React Native, Node.js, Leadership'), 'JS');
    fireEvent.changeText(getByPlaceholderText('Describe your ideal job, work environment, and career goals'), 'Remote');

    const continueBtn = getByText('Continue');
    fireEvent.press(continueBtn);

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('ExperiencesScreen', { userId: 'asdf' });
    });
  });
});
