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

  it('fires onInputChange for education', () => {
    const { getByPlaceholderText, onInputChange } = setup();
    const input = getByPlaceholderText("e.g., Bachelor's in Computer Science, MIT");

    fireEvent.changeText(input, 'MIT');
    expect(onInputChange).toHaveBeenCalledWith('education', 'MIT');
  });

  it('fires onInputChange for experience', () => {
    const { getByPlaceholderText, onInputChange } = setup();
    const input = getByPlaceholderText('Describe your work experience and achievements');

    fireEvent.changeText(input, '5 years');
    expect(onInputChange).toHaveBeenCalledWith('experience', '5 years');
  });

  it('fires onInputChange for skills', () => {
    const { getByPlaceholderText, onInputChange } = setup();
    const input = getByPlaceholderText('e.g., JavaScript, React Native, Node.js, Leadership');

    fireEvent.changeText(input, 'React');
    expect(onInputChange).toHaveBeenCalledWith('skills', 'React');
  });

  it('fires onInputChange for preferences', () => {
    const { getByPlaceholderText, onInputChange } = setup();
    const input = getByPlaceholderText('Describe your ideal job, work environment, and career goals');

    fireEvent.changeText(input, 'Remote work');
    expect(onInputChange).toHaveBeenCalledWith('preferences', 'Remote work');
  });

  it('fires onFocus and onBlur for name field', () => {
    const { getByPlaceholderText, onFocus, onBlur } = setup();
    const input = getByPlaceholderText('Enter your full name');

    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalledWith('name');

    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('fires onFocus and onBlur for education field', () => {
    const { getByPlaceholderText, onFocus, onBlur } = setup();
    const input = getByPlaceholderText("e.g., Bachelor's in Computer Science, MIT");

    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalledWith('education');

    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('fires onFocus and onBlur for experience field', () => {
    const { getByPlaceholderText, onFocus, onBlur } = setup();
    const input = getByPlaceholderText('Describe your work experience and achievements');

    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalledWith('experience');

    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('fires onFocus and onBlur for skills field', () => {
    const { getByPlaceholderText, onFocus, onBlur } = setup();
    const input = getByPlaceholderText('e.g., JavaScript, React Native, Node.js, Leadership');

    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalledWith('skills');

    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('fires onFocus and onBlur for preferences field', () => {
    const { getByPlaceholderText, onFocus, onBlur } = setup();
    const input = getByPlaceholderText('Describe your ideal job, work environment, and career goals');

    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalledWith('preferences');

    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });
});
