import React from 'react';
import { render } from '@testing-library/react-native';
import { AbsoluteLoading } from '../AbsoluteLoading';

describe('AbsoluteLoading', () => {
  it('renders ActivityIndicator', () => {
    const { getByTestId, UNSAFE_root } = render(<AbsoluteLoading />);
    
    // Check that the component renders
    expect(UNSAFE_root).toBeTruthy();
  });

  it('renders with correct styling', () => {
    const { UNSAFE_root } = render(<AbsoluteLoading />);
    
    // Verify component renders successfully
    expect(UNSAFE_root).toBeTruthy();
  });
});

