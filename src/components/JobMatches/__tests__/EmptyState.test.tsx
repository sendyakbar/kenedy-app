import React from 'react';
import { render } from '@testing-library/react-native';
import { EmptyState } from '../EmptyState';

describe('EmptyState', () => {
    it('renders with default props', () => {
        const { getByText } = render(<EmptyState />);
        
        expect(getByText('No Job Matches Yet')).toBeTruthy();
        expect(getByText("We're analyzing your profile to find the best opportunities for you.")).toBeTruthy();
        expect(getByText('🔍')).toBeTruthy();
    });

    it('renders with custom title', () => {
        const { getByText } = render(<EmptyState title="Custom Title" />);
        
        expect(getByText('Custom Title')).toBeTruthy();
    });

    it('renders with custom subtitle', () => {
        const { getByText } = render(<EmptyState subtitle="Custom subtitle message" />);
        
        expect(getByText('Custom subtitle message')).toBeTruthy();
    });

    it('renders with custom icon', () => {
        const { getByText } = render(<EmptyState icon="🎯" />);
        
        expect(getByText('🎯')).toBeTruthy();
    });

    it('renders with all custom props', () => {
        const { getByText } = render(
            <EmptyState 
                title="No Results"
                subtitle="Try adjusting your filters"
                icon="📭"
            />
        );
        
        expect(getByText('No Results')).toBeTruthy();
        expect(getByText('Try adjusting your filters')).toBeTruthy();
        expect(getByText('📭')).toBeTruthy();
    });
});

