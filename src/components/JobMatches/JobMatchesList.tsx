import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { JobCard } from "./JobCard";
import { EmptyState } from "./EmptyState";
import { JobMatch } from "../../services/models/jobMatches/types";

interface JobMatchesListProps {
    jobs: JobMatch[];
    onJobPress?: (job: JobMatch) => void;
    isLoading?: boolean;
}

export const JobMatchesList: FC<JobMatchesListProps> = ({ 
    jobs, 
    onJobPress,
    isLoading = false
}) => {
    if (!jobs || jobs.length === 0) {
        return isLoading ? null : <EmptyState />;
    }

    return (
        <View style={styles.container}>
            {jobs.map((job) => (
                <JobCard 
                    key={job.id} 
                    job={job} 
                    onPress={onJobPress}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 8,
    },
});

