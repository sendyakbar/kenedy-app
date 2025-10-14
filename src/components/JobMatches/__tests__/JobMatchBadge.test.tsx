import React from 'react';
import { render } from '@testing-library/react-native';
import { JobMatchBadge } from '../JobMatchBadge';

describe('JobMatchBadge', () => {
    it('renders high score correctly (80%+)', () => {
        const { getByText } = render(<JobMatchBadge score="0.92" />);
        
        expect(getByText('92%')).toBeTruthy();
        expect(getByText('Match')).toBeTruthy();
    });

    it('renders medium score correctly (60-79%)', () => {
        const { getByText } = render(<JobMatchBadge score="0.75" />);
        
        expect(getByText('75%')).toBeTruthy();
        expect(getByText('Match')).toBeTruthy();
    });

    it('renders low score correctly (<60%)', () => {
        const { getByText } = render(<JobMatchBadge score="0.45" />);
        
        expect(getByText('45%')).toBeTruthy();
        expect(getByText('Match')).toBeTruthy();
    });

    it('handles perfect score', () => {
        const { getByText } = render(<JobMatchBadge score="1.0" />);
        
        expect(getByText('100%')).toBeTruthy();
    });

    it('handles zero score', () => {
        const { getByText } = render(<JobMatchBadge score="0" />);
        
        expect(getByText('0%')).toBeTruthy();
    });

    it('handles invalid score gracefully', () => {
        const { getByText } = render(<JobMatchBadge score="invalid" />);
        
        expect(getByText('0%')).toBeTruthy();
    });

    it('rounds score to nearest integer', () => {
        const { getByText } = render(<JobMatchBadge score="0.876" />);
        
        expect(getByText('88%')).toBeTruthy();
    });
});

