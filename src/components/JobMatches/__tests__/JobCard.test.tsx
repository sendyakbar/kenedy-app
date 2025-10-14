import React from 'react';
import { render } from '@testing-library/react-native';
import { JobCard } from '../JobCard';
import { JobMatch } from '../../../services/models/jobMatches/types';

const mockJob: JobMatch = {
    id: 1,
    user_id: 1,
    title: 'Senior React Native Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    score: '0.92',
    description: 'We are looking for an experienced React Native developer.',
};

describe('JobCard', () => {
    it('renders job information correctly', () => {
        const { getByText } = render(<JobCard job={mockJob} />);
        
        expect(getByText('Senior React Native Developer')).toBeTruthy();
        expect(getByText('TechCorp Inc.')).toBeTruthy();
        expect(getByText('San Francisco, CA')).toBeTruthy();
        expect(getByText('92%')).toBeTruthy();
    });

    it('renders view details button', () => {
        const { getByText } = render(<JobCard job={mockJob} />);
        
        expect(getByText('View Details')).toBeTruthy();
    });
});

