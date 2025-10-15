import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { JobCard } from '../JobCard';
import { JobMatch } from '../../../services/models/jobMatches/types';

const mockJob: JobMatch = {
    user_id: '1',
    job_id: '1',
    user_role: 'Senior React Native Developer',
    job_role: 'Senior React Native Developer',
    skills: 'React Native, TypeScript, JavaScript',
    job_description: 'We are looking for an experienced React Native developer.',
    match_score: 0.92,
    reason: 'Strong match based on your React Native experience',
    updated_at: '2024-01-15T10:30:00Z',
};

describe('JobCard', () => {
    it('renders job information correctly', () => {
        const { getAllByText, getByText } = render(<JobCard job={mockJob} />);
        
        expect(getAllByText('Senior React Native Developer')).toHaveLength(2); // job_role and user_role
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
        const { getAllByText } = render(<JobCard job={mockJob} onPress={onPressMock} />);
        
        const jobTitleElements = getAllByText('Senior React Native Developer');
        const card = jobTitleElements[0].parent?.parent?.parent;
        if (card) {
            fireEvent.press(card);
            expect(onPressMock).toHaveBeenCalledWith(mockJob);
        }
    });

    it('renders without onPress callback', () => {
        const { getAllByText } = render(<JobCard job={mockJob} />);
        
        expect(getAllByText('Senior React Native Developer')).toHaveLength(2);
    });
});

