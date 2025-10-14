import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProfileForm } from '../ProfileForm';
import type { FormData } from '../types';

describe('ProfileForm', () => {
  const baseFormData: FormData = {
    name: '',
    education: '',
    experience: '',
    skills: '',
    preferences: '',
  };

  const setup = (override: Partial<FormData> = {}) => {
    const formData = { ...baseFormData, ...override };
    const onInputChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    const utils = render(
      <ProfileForm
        formData={formData}
        focusedField={null}
        onInputChange={onInputChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
    return { ...utils, onInputChange, onFocus, onBlur };
  };

  it('renders all input labels', () => {
    const { getByText } = setup();

    expect(getByText('Full Name')).toBeTruthy();
    expect(getByText('Education')).toBeTruthy();
    expect(getByText('Experience')).toBeTruthy();
    expect(getByText('Skills')).toBeTruthy();
    expect(getByText('Job Preferences')).toBeTruthy();
  });

  it('fires onInputChange for name', () => {
    const { getByPlaceholderText, onInputChange } = setup();
    const input = getByPlaceholderText('Enter your full name');

    fireEvent.changeText(input, 'Alice');
    expect(onInputChange).toHaveBeenCalledWith('name', 'Alice');
  });

  it('fires onFocus and onBlur callbacks', () => {
    const { getByPlaceholderText, onFocus, onBlur } = setup();
    const input = getByPlaceholderText('Enter your full name');

    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();

    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });
});
