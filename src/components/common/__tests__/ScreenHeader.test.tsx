import React from 'react';
import { render } from '@testing-library/react-native';
import { ScreenHeader } from '../../common/ScreenHeader';

describe('ScreenHeader', () => {
  it('renders title and subtitle', () => {
    const { getByText } = render(
      <ScreenHeader title="Title" subtitle="Subtitle" />
    );

    expect(getByText('Title')).toBeTruthy();
    expect(getByText('Subtitle')).toBeTruthy();
  });

  it('renders only title when subtitle is not provided', () => {
    const { getByText, queryByText } = render(
      <ScreenHeader title="Only Title" />
    );

    expect(getByText('Only Title')).toBeTruthy();
    expect(queryByText('Subtitle')).toBeNull();
  });
});
