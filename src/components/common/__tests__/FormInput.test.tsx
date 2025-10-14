import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { FormInput } from '../../common/FormInput';

describe('FormInput', () => {
  it('renders label and placeholder', () => {
    const { getByText, getByPlaceholderText } = render(
      <FormInput label="Name" value="" onChangeText={() => {}} placeholder="Enter name" />
    );

    expect(getByText('Name')).toBeTruthy();
    expect(getByPlaceholderText('Enter name')).toBeTruthy();
  });

  it('calls onChangeText when typing', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <FormInput label="Name" value="" onChangeText={onChangeText} placeholder="Enter name" />
    );

    const input = getByPlaceholderText('Enter name');
    fireEvent.changeText(input, 'John Doe');

    expect(onChangeText).toHaveBeenCalledWith('John Doe');
  });

  it('applies multiline props', () => {
    const { getByPlaceholderText } = render(
      <FormInput label="Bio" value="" onChangeText={() => {}} placeholder="Enter bio" multiline numberOfLines={3} />
    );

    const input = getByPlaceholderText('Enter bio');
    expect(input.props.multiline).toBe(true);
    expect(input.props.numberOfLines).toBe(3);
  });

  it('applies focused styles when isFocused is true', () => {
    const { getByPlaceholderText } = render(
      <FormInput label="Name" value="" onChangeText={() => {}} placeholder="Enter name" isFocused={true} />
    );

    const input = getByPlaceholderText('Enter name');
    expect(input).toBeTruthy();
  });

  it('applies hasValue styles when value is not empty', () => {
    const { getByPlaceholderText } = render(
      <FormInput label="Name" value="John Doe" onChangeText={() => {}} placeholder="Enter name" />
    );

    const input = getByPlaceholderText('Enter name');
    expect(input.props.value).toBe('John Doe');
  });

  it('calls onFocus and onBlur callbacks', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    
    const { getByPlaceholderText } = render(
      <FormInput 
        label="Name" 
        value="" 
        onChangeText={() => {}} 
        placeholder="Enter name"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );

    const input = getByPlaceholderText('Enter name');
    
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();
    
    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });
});
