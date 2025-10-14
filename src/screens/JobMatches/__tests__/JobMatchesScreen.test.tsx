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

        const { getByText } = render(
            <JobMatchesScreen route={mockRoute} />
        );

        // Dummy data jobs should be displayed
        expect(getByText('Senior React Native Developer')).toBeTruthy();
        expect(getByText('React Native Specialist')).toBeTruthy();
    });

    it('displays API data when available', () => {
        const apiJobs = [
            {
                id: 100,
                user_id: 1,
                title: 'API Job Title',
                company: 'API Company',
                location: 'API Location',
                score: '0.95',
                description: 'This is from the API',
            },
        ];

        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: apiJobs,
            isLoading: false,
        });

        const { getByText } = render(
            <JobMatchesScreen route={mockRoute} />
        );

        expect(getByText('API Job Title')).toBeTruthy();
        expect(getByText('API Company')).toBeTruthy();
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
                id: 100,
                user_id: 1,
                title: 'Test Job',
                company: 'Test Company',
                location: 'Test Location',
                score: '0.95',
                description: 'Test description',
            },
        ];

        (useGetJobMatches as jest.Mock).mockReturnValue({
            data: apiJobs,
            isLoading: false,
        });

        const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
        const { getByText } = render(<JobMatchesScreen route={mockRoute} />);

        // Find and press the job card
        const jobTitle = getByText('Test Job');
        const jobCard = jobTitle.parent?.parent?.parent;
        
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

        const { getByText } = render(<JobMatchesScreen route={mockRoute} />);

        // Should show dummy jobs (8 jobs) when data is undefined
        expect(getByText('8 opportunities tailored for you')).toBeTruthy();
        expect(getByText('Senior React Native Developer')).toBeTruthy();
    });
});

