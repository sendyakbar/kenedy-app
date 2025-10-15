import { FC } from "react";
import { Props } from "./types";
import { View, ScrollView, StyleSheet } from "react-native";
import { useGetJobMatches } from "../../services/queries/jobMatches/useGetJobMatches";
import { ScreenHeader } from "../../components/common";
import { AbsoluteLoading } from "../../components/common/AbsoluteLoading";
import { colors } from "../../themes/colors";
import { JobMatch } from "../../services/models/jobMatches/types";
import { JobMatchesList } from "../../components/JobMatches";

// Dummy data for testing UI (remove when API is ready)
const DUMMY_JOBS: JobMatch[] = [
    {
        user_id: "user_123",
        job_id: "job_001",
        user_role: "Senior React Native Developer",
        job_role: "Senior React Native Developer",
        skills: "React Native, TypeScript, Redux, JavaScript, iOS, Android, Mobile Development",
        job_description: "We're looking for an experienced React Native developer to join our mobile team. You'll work on cutting-edge mobile applications used by millions of users worldwide. Must have strong knowledge of TypeScript, Redux, and native mobile development.",
        match_score: 0.92,
        reason: "Excellent match based on your React Native expertise and TypeScript skills",
        updated_at: "2024-01-15T10:30:00Z"
    },
    {
        user_id: "user_123",
        job_id: "job_002",
        user_role: "Senior React Native Developer",
        job_role: "Mobile Application Engineer",
        skills: "React Native, JavaScript, Mobile Development, iOS, Android, Cross-platform",
        job_description: "Join our fast-growing startup as a Mobile Application Engineer. Work on both iOS and Android platforms using React Native. Collaborate with designers and backend engineers to create amazing user experiences.",
        match_score: 0.85,
        reason: "Strong alignment with your mobile development background and React Native experience",
        updated_at: "2024-01-14T14:20:00Z"
    },
    {
        user_id: "user_123",
        job_id: "job_003",
        user_role: "Senior React Native Developer",
        job_role: "Full Stack Mobile Developer",
        skills: "React Native, Node.js, JavaScript, Mobile Development, Backend Development, API Integration",
        job_description: "Seeking a versatile developer with experience in both mobile and backend development. You'll be responsible for building and maintaining our mobile applications while also contributing to our Node.js backend services.",
        match_score: 0.78,
        reason: "Good match considering your mobile expertise, though backend experience could be stronger",
        updated_at: "2024-01-13T09:15:00Z"
    },
    {
        user_id: "user_123",
        job_id: "job_004",
        user_role: "Senior React Native Developer",
        job_role: "iOS/Android Developer (React Native)",
        skills: "React Native, iOS, Android, Mobile Development, UI/UX, CI/CD, Testing",
        job_description: "Work with a talented team to build world-class mobile applications. We need someone who is passionate about mobile development, has an eye for detail, and can write clean, maintainable code. Experience with CI/CD and testing is a plus.",
        match_score: 0.88,
        reason: "Very strong match with your React Native specialization and mobile development focus",
        updated_at: "2024-01-12T16:45:00Z"
    },
    {
        user_id: "user_123",
        job_id: "job_005",
        user_role: "Senior React Native Developer",
        job_role: "Lead Mobile Engineer",
        skills: "React Native, Leadership, Mobile Development, Architecture, Team Management, Mentoring",
        job_description: "Lead our mobile engineering team in developing next-generation applications. This role involves architectural decisions, mentoring junior developers, and hands-on coding. Strong leadership and communication skills required.",
        match_score: 0.81,
        reason: "Good technical match, though leadership experience in mobile teams could be stronger",
        updated_at: "2024-01-11T11:30:00Z"
    },
    {
        user_id: "user_123",
        job_id: "job_006",
        user_role: "Senior React Native Developer",
        job_role: "React Native Specialist",
        skills: "React Native, Performance Optimization, Native Modules, JavaScript, Mobile Development, High-performance Apps",
        job_description: "Exceptional opportunity for a React Native expert! You'll be working on high-performance mobile apps with complex UI/UX requirements. Must have deep understanding of React Native internals, performance optimization, and native module integration.",
        match_score: 0.95,
        reason: "Perfect match! Your React Native expertise and performance optimization skills align perfectly",
        updated_at: "2024-01-10T13:20:00Z"
    },
    {
        user_id: "user_123",
        job_id: "job_007",
        user_role: "Senior React Native Developer",
        job_role: "Mobile Software Developer",
        skills: "React Native, JavaScript, Mobile Development, Agile, Enterprise Solutions, Multiple Projects",
        job_description: "Join our agile team developing innovative mobile solutions for enterprise clients. You'll work on multiple projects simultaneously and have the opportunity to learn new technologies. Perfect for someone who loves variety and challenges.",
        match_score: 0.73,
        reason: "Decent match with your mobile development skills, though enterprise experience could be stronger",
        updated_at: "2024-01-09T08:45:00Z"
    },
    {
        user_id: "user_123",
        job_id: "job_008",
        user_role: "Senior React Native Developer",
        job_role: "Cross-Platform Mobile Developer",
        skills: "React Native, Cross-platform Development, JavaScript, Mobile Development, Collaborative Culture",
        job_description: "Build amazing cross-platform applications using React Native. We're a mid-size company with a collaborative culture and excellent benefits. You'll have the chance to work on products that impact thousands of users daily.",
        match_score: 0.67,
        reason: "Moderate match - your React Native skills are relevant but some additional cross-platform experience would be ideal",
        updated_at: "2024-01-08T15:10:00Z"
    }
];

export const JobMatchesScreen: FC<Props> = ({ route }) => {
    const { userId } = route.params

    const {
        data: apiData,
        isLoading,
    } = useGetJobMatches({
        param: { userId },
        options: { enabled: !!userId },
    })
    
    // Use dummy data if API data is not available
    const data = apiData && apiData.length > 0 ? apiData : DUMMY_JOBS;

    const handleJobPress = (job: JobMatch) => {
        // TODO: Navigate to job details screen
        console.log('Job pressed:', job.job_role);
    };

    return (
        <>
            {isLoading && <AbsoluteLoading />}
            <ScrollView 
                style={styles.scrollView} 
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <ScreenHeader
                    title="Job Matches"
                    subtitle={`${data?.length || 0} opportunities tailored for you`}
                />

                <JobMatchesList 
                    jobs={data} 
                    onJobPress={handleJobPress}
                    isLoading={isLoading}
                />

                <View style={styles.bottomSpacing} />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
    },
    scrollViewContent: { 
        flexGrow: 1 
    },
    bottomSpacing: { 
        height: 32 
    },
});