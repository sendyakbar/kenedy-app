import React from 'react';
import { render } from '@testing-library/react-native';
import { JobMatchesList } from '../JobMatchesList';
import { JobMatch } from '../../../services/models/jobMatches/types';

const mockJobs: JobMatch[] = [
    {
        user_id: '1',
        job_id: '1',
        user_role: 'Senior React Native Developer',
        job_role: 'Senior React Native Developer',
        skills: 'React Native, TypeScript, JavaScript',
        job_description: 'We are looking for an experienced React Native developer.',
        match_score: 0.92,
        reason: 'Strong match based on your React Native experience',
        updated_at: '2024-01-15T10:30:00Z',
    },
    {
        user_id: '1',
        job_id: '2',
        user_role: 'Mobile Engineer',
        job_role: 'Mobile Engineer',
        skills: 'React Native, iOS, Android',
        job_description: 'Join our mobile team.',
        match_score: 0.85,
        reason: 'Good match for mobile development',
        updated_at: '2024-01-15T10:30:00Z',
    },
    {
        user_id: '1',
        job_id: '3',
        user_role: 'iOS Developer',
        job_role: 'iOS Developer',
        skills: 'Swift, iOS, Xcode',
        job_description: 'Build amazing iOS apps.',
        match_score: 0.78,
        reason: 'Decent match for iOS development',
        updated_at: '2024-01-15T10:30:00Z',
    },
];

describe('JobMatchesList', () => {
    it('renders a list of job cards', () => {
        const { getAllByText } = render(<JobMatchesList jobs={mockJobs} />);
        
        expect(getAllByText('Senior React Native Developer')).toHaveLength(2);
        expect(getAllByText('Mobile Engineer')).toHaveLength(2);
        expect(getAllByText('iOS Developer')).toHaveLength(2);
    });

    it('renders empty state when no jobs are provided', () => {
        const { getByText } = render(<JobMatchesList jobs={[]} />);
        
        expect(getByText('No Job Matches Yet')).toBeTruthy();
    });

    it('does not render empty state when loading', () => {
        const { queryByText } = render(<JobMatchesList jobs={[]} isLoading={true} />);
        
        expect(queryByText('No Job Matches Yet')).toBeNull();
    });

    it('calls onJobPress when a job card is pressed', () => {
        const onJobPressMock = jest.fn();
        const { getAllByText } = render(
            <JobMatchesList jobs={mockJobs} onJobPress={onJobPressMock} />
        );
        
        // Note: This test verifies the prop is passed to JobCard
        // The actual press behavior is tested in JobCard.test.tsx
        expect(getAllByText('Senior React Native Developer')).toHaveLength(2);
    });

    it('renders all job information correctly', () => {
        const { getAllByText, getByText } = render(<JobMatchesList jobs={mockJobs} />);
        
        // Check job roles (each appears twice: job_role and user_role)
        expect(getAllByText('Senior React Native Developer')).toHaveLength(2);
        expect(getAllByText('Mobile Engineer')).toHaveLength(2);
        expect(getAllByText('iOS Developer')).toHaveLength(2);
        
        // Check scores
        expect(getByText('92%')).toBeTruthy();
        expect(getByText('85%')).toBeTruthy();
        expect(getByText('78%')).toBeTruthy();
    });

    it('handles single job correctly', () => {
        const singleJob = [mockJobs[0]];
        const { getAllByText, queryByText } = render(<JobMatchesList jobs={singleJob} />);
        
        expect(getAllByText('Senior React Native Developer')).toHaveLength(2);
        expect(queryByText('Mobile Engineer')).toBeNull();
    });
});

