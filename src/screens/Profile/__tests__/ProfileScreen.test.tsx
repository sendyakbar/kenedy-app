import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ProfileScreen } from '../ProfileScreen';

// Define a mock navigate function name that is allowed by Jest's out-of-scope guard
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
  route: { key: 'profile-key', name: 'ProfileScreen', params: undefined },
  navigation: {} as any,
} as any;

describe('ProfileScreen', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders header and form', () => {
    const { getByText, getByPlaceholderText } = render(<ProfileScreen {...minimalProps} />);

    expect(getByText('Build Your Profile')).toBeTruthy();
    expect(getByPlaceholderText('Enter your full name')).toBeTruthy();
  });

  it('blocks submission when fields are empty', async () => {
    const { getByText } = render(<ProfileScreen {...minimalProps} />);

    const continueBtn = getByText('Continue');
    fireEvent.press(continueBtn);

    expect(mockNavigate).not.toHaveBeenCalled();
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
