import { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { JobCardProps } from "./types";
import { JobMatchBadge } from "./JobMatchBadge";
import { colors } from "../../themes/colors";

export const JobCard: FC<JobCardProps> = ({ job, onPress }) => {
    const handlePress = () => {
        onPress?.(job);
    };

    return (
        <TouchableOpacity 
            style={styles.jobCard}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            {/* Header with title and score */}
            <View style={styles.cardHeader}>
                <View style={styles.titleContainer}>
                    <Text style={styles.jobTitle} numberOfLines={2}>
                        {job.title}
                    </Text>
                </View>
                <JobMatchBadge score={job.score} />
            </View>

            {/* Company and Location */}
            <View style={styles.companySection}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoIcon}>🏢</Text>
                    <Text style={styles.companyText}>{job.company}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoIcon}>📍</Text>
                    <Text style={styles.locationText}>{job.location}</Text>
                </View>
            </View>

            {/* Description */}
            <View style={styles.descriptionSection}>
                <Text style={styles.descriptionText} numberOfLines={3}>
                    {job.description}
                </Text>
            </View>

            {/* Action Button */}
            <View style={styles.cardFooter}>
                <View style={styles.viewDetailsButton}>
                    <Text style={styles.viewDetailsText}>View Details</Text>
                    <Text style={styles.arrow}>→</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    jobCard: {
        backgroundColor: colors.WHITE,
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
        borderWidth: 1,
        borderColor: colors.BORDER,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    titleContainer: {
        flex: 1,
        marginRight: 12,
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.PRIMARY,
        lineHeight: 26,
    },
    companySection: {
        marginBottom: 16,
        gap: 8,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoIcon: {
        fontSize: 16,
        marginRight: 8,
    },
    companyText: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.PRIMARY,
    },
    locationText: {
        fontSize: 15,
        color: colors.TEXT_SECONDARY,
    },
    descriptionSection: {
        marginBottom: 16,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: colors.BORDER,
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.TEXT_SECONDARY,
    },
    cardFooter: {
        marginTop: 4,
    },
    viewDetailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.SECONDARY,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    viewDetailsText: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.WHITE,
        marginRight: 6,
    },
    arrow: {
        fontSize: 18,
        color: colors.WHITE,
        fontWeight: '600',
    },
});

