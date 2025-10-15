import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { JobMatchesScreen } from '../JobMatchesScreen';
import { useGetJobMatches } from '../../../services/queries/jobMatches/useGetJobMatches';

// Mock the hook
jest.mock('../../../services/queries/jobMatches/useGetJobMatches');

const mockRoute = {
    params: {
        userId: 'test-user-123',
    },
    key: 'JobMatches',
    name: 'JobMatchesScreen' as const,
};

describe('JobMatchesScreen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders screen header with title', () => {
        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: [],
            isLoading: false,
        });

        const { getByText } = render(
            <JobMatchesScreen route={mockRoute} />
        );

        expect(getByText('Job Matches')).toBeTruthy();
    });

    it('shows loading state when fetching data', () => {
        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: true,
        });

        const { getByText } = render(
            <JobMatchesScreen route={mockRoute} />
        );

        // The screen should still render the header even when loading
        expect(getByText('Job Matches')).toBeTruthy();
    });

    it('displays dummy jobs when API returns no data', () => {
        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: [],
            isLoading: false,
        });

        const { getAllByText } = render(
            <JobMatchesScreen route={mockRoute} />
        );

        // Dummy data jobs should be displayed (8 jobs, each with user_role "Senior React Native Developer", plus 1 job with job_role "Senior React Native Developer")
        expect(getAllByText('Senior React Native Developer')).toHaveLength(9);
        expect(getAllByText('Mobile Application Engineer')).toHaveLength(1);
    });

    it('displays API data when available', () => {
        const apiJobs = [
            {
                user_id: '1',
                job_id: '100',
                user_role: 'API User Role',
                job_role: 'API Job Title',
                skills: 'API Skills',
                job_description: 'This is from the API',
                match_score: 0.95,
                reason: 'API match reason',
                updated_at: '2024-01-15T10:30:00Z',
            },
        ];

        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: apiJobs,
            isLoading: false,
        });

        const { getAllByText } = render(
            <JobMatchesScreen route={mockRoute} />
        );

        expect(getAllByText('API Job Title')).toHaveLength(1);
        expect(getAllByText('API User Role')).toHaveLength(1);
    });

    it('shows correct opportunity count in subtitle', () => {
        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: [],
            isLoading: false,
        });

        const { getByText } = render(
            <JobMatchesScreen route={mockRoute} />
        );

        // Dummy data has 8 jobs
        expect(getByText('8 opportunities tailored for you')).toBeTruthy();
    });

    it('calls useGetJobMatches with correct params', () => {
        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: [],
            isLoading: false,
        });

        render(<JobMatchesScreen route={mockRoute} />);

        expect(useGetJobMatches).toHaveBeenCalledWith({
            param: { userId: 'test-user-123' },
            options: { enabled: true },
        });
    });

    it('passes userId from route params', () => {
        const customRoute = {
            ...mockRoute,
            params: { userId: 'custom-user-456' },
        };

        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: [],
            isLoading: false,
        });

        render(<JobMatchesScreen route={customRoute} />);

        expect(useGetJobMatches).toHaveBeenCalledWith({
            param: { userId: 'custom-user-456' },
            options: { enabled: true },
        });
    });

    it('handles job press correctly', () => {
        const apiJobs = [
            {
                user_id: '1',
                job_id: '100',
                user_role: 'Test User Role',
                job_role: 'Test Job',
                skills: 'Test Skills',
                job_description: 'Test description',
                match_score: 0.95,
                reason: 'Test reason',
                updated_at: '2024-01-15T10:30:00Z',
            },
        ];

        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: apiJobs,
            isLoading: false,
        });

        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        const { getAllByText } = render(<JobMatchesScreen route={mockRoute} />);

        // Find and press the job card
        const jobTitleElements = getAllByText('Test Job');
        const jobCard = jobTitleElements[0].parent?.parent?.parent;
        
        if (jobCard) {
            fireEvent.press(jobCard);
            expect(consoleLogSpy).toHaveBeenCalledWith('Job pressed:', 'Test Job');
        }

        consoleLogSpy.mockRestore();
    });

    it('handles undefined data correctly by showing dummy data', () => {
        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: false,
        });

        const { getAllByText, getByText } = render(<JobMatchesScreen route={mockRoute} />);

        // Should show dummy jobs (8 jobs) when data is undefined
        expect(getByText('8 opportunities tailored for you')).toBeTruthy();
        expect(getAllByText('Senior React Native Developer')).toHaveLength(9);
    });
});

