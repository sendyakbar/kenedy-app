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

  it('supports variant and size props', () => {
    const { getByText } = render(
      <Button title="Primary" onPress={() => {}} variant="primary" size="large" />
    );

    const text = getByText('Primary');
    expect(text).toBeTruthy();
  });
});
