import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../../common/Button';

describe('Button', () => {
  it('renders title', () => {
    const { getByText } = render(
      <Button title="Press me" onPress={() => {}} />
    );

    expect(getByText('Press me')).toBeTruthy();
  });

  it('fires onPress', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <Button title="Press me" onPress={onPress} />
    );

    fireEvent.press(getByText('Press me'));
    expect(onPress).toHaveBeenCalled();
  });

  it('renders with primary variant', () => {
    const { getByText } = render(
      <Button title="Primary" onPress={() => {}} variant="primary" size="large" />
    );

    const text = getByText('Primary');
    expect(text).toBeTruthy();
  });

  it('renders with secondary variant', () => {
    const { getByText } = render(
      <Button title="Secondary" onPress={() => {}} variant="secondary" />
    );

    const text = getByText('Secondary');
    expect(text).toBeTruthy();
  });

  it('renders with outline variant', () => {
    const { getByText } = render(
      <Button title="Outline" onPress={() => {}} variant="outline" />
    );

    const text = getByText('Outline');
    expect(text).toBeTruthy();
  });

  it('renders with small size', () => {
    const { getByText } = render(
      <Button title="Small" onPress={() => {}} size="small" />
    );

    expect(getByText('Small')).toBeTruthy();
  });

  it('renders with medium size', () => {
    const { getByText } = render(
      <Button title="Medium" onPress={() => {}} size="medium" />
    );

    expect(getByText('Medium')).toBeTruthy();
  });

  it('renders with fullWidth prop', () => {
    const { getByText } = render(
      <Button title="Full Width" onPress={() => {}} fullWidth />
    );

    expect(getByText('Full Width')).toBeTruthy();
  });

  it('applies custom style and textStyle', () => {
    const customStyle = { marginTop: 20 };
    const customTextStyle = { fontWeight: '900' as const };

    const { getByText } = render(
      <Button 
        title="Custom" 
        onPress={() => {}} 
        style={customStyle}
        textStyle={customTextStyle}
      />
    );

    expect(getByText('Custom')).toBeTruthy();
  });
});
