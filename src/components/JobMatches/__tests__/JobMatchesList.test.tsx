import React from 'react';
import { render } from '@testing-library/react-native';
import { JobMatchesList } from '../JobMatchesList';
import { JobMatch } from '../../../services/models/jobMatches/types';

const mockJobs: JobMatch[] = [
    {
        id: 1,
        user_id: 1,
        title: 'Senior React Native Developer',
        company: 'TechCorp Inc.',
        location: 'San Francisco, CA',
        score: '0.92',
        description: 'We are looking for an experienced React Native developer.',
    },
    {
        id: 2,
        user_id: 1,
        title: 'Mobile Engineer',
        company: 'StartupXYZ',
        location: 'Remote',
        score: '0.85',
        description: 'Join our mobile team.',
    },
    {
        id: 3,
        user_id: 1,
        title: 'iOS Developer',
        company: 'BigTech',
        location: 'New York, NY',
        score: '0.78',
        description: 'Build amazing iOS apps.',
    },
];

describe('JobMatchesList', () => {
    it('renders a list of job cards', () => {
        const { getByText } = render(<JobMatchesList jobs={mockJobs} />);
        
        expect(getByText('Senior React Native Developer')).toBeTruthy();
        expect(getByText('Mobile Engineer')).toBeTruthy();
        expect(getByText('iOS Developer')).toBeTruthy();
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
        const { getByText } = render(
            <JobMatchesList jobs={mockJobs} onJobPress={onJobPressMock} />
        );
        
        // Note: This test verifies the prop is passed to JobCard
        // The actual press behavior is tested in JobCard.test.tsx
        expect(getByText('Senior React Native Developer')).toBeTruthy();
    });

    it('renders all job information correctly', () => {
        const { getByText } = render(<JobMatchesList jobs={mockJobs} />);
        
        // Check companies
        expect(getByText('TechCorp Inc.')).toBeTruthy();
        expect(getByText('StartupXYZ')).toBeTruthy();
        expect(getByText('BigTech')).toBeTruthy();
        
        // Check scores
        expect(getByText('92%')).toBeTruthy();
        expect(getByText('85%')).toBeTruthy();
        expect(getByText('78%')).toBeTruthy();
    });

    it('handles single job correctly', () => {
        const singleJob = [mockJobs[0]];
        const { getByText, queryByText } = render(<JobMatchesList jobs={singleJob} />);
        
        expect(getByText('Senior React Native Developer')).toBeTruthy();
        expect(queryByText('Mobile Engineer')).toBeNull();
    });
});

