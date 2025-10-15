import { FC } from "react";
import { FlatList, StyleSheet, ListRenderItem } from "react-native";
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
    const renderItem: ListRenderItem<JobMatch> = ({ item }) => (
        <JobCard 
            job={item} 
            onPress={onJobPress}
        />
    );

    const renderEmptyComponent = () => {
        return isLoading ? null : <EmptyState />;
    };

    return (
        <FlatList
            data={jobs}
            renderItem={renderItem}
            keyExtractor={(_, i) => String(i)}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderEmptyComponent}
            scrollEnabled={false}
        />
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 24,
        paddingTop: 8,
    },
});

