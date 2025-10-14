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
        id: 1,
        user_id: 1,
        title: "Senior React Native Developer",
        company: "TechCorp Inc.",
        location: "San Francisco, CA",
        score: "0.92",
        description: "We're looking for an experienced React Native developer to join our mobile team. You'll work on cutting-edge mobile applications used by millions of users worldwide. Must have strong knowledge of TypeScript, Redux, and native mobile development."
    },
    {
        id: 2,
        user_id: 1,
        title: "Mobile Application Engineer",
        company: "Innovate Solutions",
        location: "Remote",
        score: "0.85",
        description: "Join our fast-growing startup as a Mobile Application Engineer. Work on both iOS and Android platforms using React Native. Collaborate with designers and backend engineers to create amazing user experiences."
    },
    {
        id: 3,
        user_id: 1,
        title: "Full Stack Mobile Developer",
        company: "Digital Dynamics",
        location: "New York, NY",
        score: "0.78",
        description: "Seeking a versatile developer with experience in both mobile and backend development. You'll be responsible for building and maintaining our mobile applications while also contributing to our Node.js backend services."
    },
    {
        id: 4,
        user_id: 1,
        title: "iOS/Android Developer (React Native)",
        company: "AppMasters Global",
        location: "Austin, TX",
        score: "0.88",
        description: "Work with a talented team to build world-class mobile applications. We need someone who is passionate about mobile development, has an eye for detail, and can write clean, maintainable code. Experience with CI/CD and testing is a plus."
    },
    {
        id: 5,
        user_id: 1,
        title: "Lead Mobile Engineer",
        company: "FutureTech Labs",
        location: "Seattle, WA",
        score: "0.81",
        description: "Lead our mobile engineering team in developing next-generation applications. This role involves architectural decisions, mentoring junior developers, and hands-on coding. Strong leadership and communication skills required."
    },
    {
        id: 6,
        user_id: 1,
        title: "React Native Specialist",
        company: "Mobile First Co.",
        location: "Remote (US)",
        score: "0.95",
        description: "Exceptional opportunity for a React Native expert! You'll be working on high-performance mobile apps with complex UI/UX requirements. Must have deep understanding of React Native internals, performance optimization, and native module integration."
    },
    {
        id: 7,
        user_id: 1,
        title: "Mobile Software Developer",
        company: "CloudNine Technologies",
        location: "Boston, MA",
        score: "0.73",
        description: "Join our agile team developing innovative mobile solutions for enterprise clients. You'll work on multiple projects simultaneously and have the opportunity to learn new technologies. Perfect for someone who loves variety and challenges."
    },
    {
        id: 8,
        user_id: 1,
        title: "Cross-Platform Mobile Developer",
        company: "NextGen Apps",
        location: "Denver, CO",
        score: "0.67",
        description: "Build amazing cross-platform applications using React Native. We're a mid-size company with a collaborative culture and excellent benefits. You'll have the chance to work on products that impact thousands of users daily."
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
        console.log('Job pressed:', job.title);
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