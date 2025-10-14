import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
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

    it('renders job description', () => {
        const { getByText } = render(<JobCard job={mockJob} />);
        
        expect(getByText('We are looking for an experienced React Native developer.')).toBeTruthy();
    });

    it('renders view details button', () => {
        const { getByText } = render(<JobCard job={mockJob} />);
        
        expect(getByText('View Details')).toBeTruthy();
    });

    it('calls onPress when card is pressed', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<JobCard job={mockJob} onPress={onPressMock} />);
        
        const card = getByText('Senior React Native Developer').parent?.parent?.parent;
        if (card) {
            fireEvent.press(card);
            expect(onPressMock).toHaveBeenCalledWith(mockJob);
        }
    });

    it('renders without onPress callback', () => {
        const { getByText } = render(<JobCard job={mockJob} />);
        
        expect(getByText('Senior React Native Developer')).toBeTruthy();
    });
});

