import { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { JobCardProps } from "./types";
import { JobMatchBadge } from "./JobMatchBadge";
import { colors } from "../../themes/colors";

export const JobCard: FC<JobCardProps> = ({ job, onPress }) => {
    const handlePress = () => {
        onPress?.(job);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <TouchableOpacity 
            style={styles.jobCard}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            {/* Header with job role and match score */}
            <View style={styles.cardHeader}>
                <View style={styles.titleContainer}>
                    <Text style={styles.jobTitle} numberOfLines={2}>
                        {job.job_role}
                    </Text>
                </View>
                <JobMatchBadge score={job.match_score} />
            </View>

            {/* User Information Section */}
            <View style={styles.userSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Your Profile</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoIcon}>👤</Text>
                    <View style={styles.infoContent}>
                        <Text style={styles.infoLabel}>Your Role</Text>
                        <Text style={styles.infoValue}>{job.user_role}</Text>
                    </View>
                </View>
            </View>

            {/* Skills Section */}
            <View style={styles.skillsSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Skills Match</Text>
                </View>
                <View style={styles.skillsContainer}>
                    <Text style={styles.skillsText}>{job.skills}</Text>
                </View>
            </View>

            {/* Job Description Section */}
            <View style={styles.descriptionSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Job Description</Text>
                </View>
                <Text style={styles.descriptionText} numberOfLines={4}>
                    {job.job_description}
                </Text>
            </View>

            {/* Match Reason Section */}
            <View style={styles.reasonSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Why This Match?</Text>
                </View>
                <View style={styles.reasonContainer}>
                    <Text style={styles.reasonText}>{job.reason}</Text>
                </View>
            </View>

            {/* Footer with timestamp and action */}
            <View style={styles.cardFooter}>
                <View style={styles.timestampContainer}>
                    <Text style={styles.timestampIcon}>🕒</Text>
                    <Text style={styles.timestampText}>
                        Updated {formatDate(job.updated_at)}
                    </Text>
                </View>
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
        borderRadius: 20,
        padding: 24,
        marginBottom: 20,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6,
        borderWidth: 1,
        borderColor: colors.BORDER,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 20,
        paddingBottom: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#F3F4F6',
    },
    titleContainer: {
        flex: 1,
        marginRight: 16,
    },
    jobTitle: {
        fontSize: 22,
        fontWeight: '800',
        color: colors.PRIMARY,
        lineHeight: 28,
    },
    userSection: {
        marginBottom: 20,
        backgroundColor: '#F8F9FA',
        borderRadius: 12,
        padding: 16,
    },
    sectionHeader: {
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.PRIMARY,
        marginBottom: 8,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    infoIcon: {
        fontSize: 18,
        marginRight: 12,
        width: 24,
        textAlign: 'center',
    },
    infoContent: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.TEXT_SECONDARY,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        marginBottom: 2,
    },
    infoValue: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.PRIMARY,
    },
    skillsSection: {
        marginBottom: 20,
        backgroundColor: '#EFF6FF',
        borderRadius: 12,
        padding: 16,
    },
    skillsContainer: {
        backgroundColor: colors.WHITE,
        borderRadius: 8,
        padding: 12,
        borderLeftWidth: 4,
        borderLeftColor: colors.SECONDARY,
    },
    skillsText: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.PRIMARY,
        fontWeight: '500',
    },
    descriptionSection: {
        marginBottom: 20,
        backgroundColor: '#F0FDF4',
        borderRadius: 12,
        padding: 16,
    },
    descriptionText: {
        fontSize: 14,
        lineHeight: 22,
        color: colors.PRIMARY,
        backgroundColor: colors.WHITE,
        padding: 12,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#10B981',
    },
    reasonSection: {
        marginBottom: 20,
        backgroundColor: '#FEF3C7',
        borderRadius: 12,
        padding: 16,
    },
    reasonContainer: {
        backgroundColor: colors.WHITE,
        borderRadius: 8,
        padding: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#F59E0B',
    },
    reasonText: {
        fontSize: 14,
        lineHeight: 20,
        color: colors.PRIMARY,
        fontWeight: '500',
        fontStyle: 'italic',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    timestampContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    timestampIcon: {
        fontSize: 14,
        marginRight: 6,
        color: colors.TEXT_SECONDARY,
    },
    timestampText: {
        fontSize: 12,
        color: colors.TEXT_SECONDARY,
        fontWeight: '500',
    },
    viewDetailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.SECONDARY,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        shadowColor: colors.SECONDARY,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    viewDetailsText: {
        fontSize: 15,
        fontWeight: '700',
        color: colors.WHITE,
        marginRight: 6,
    },
    arrow: {
        fontSize: 16,
        color: colors.WHITE,
        fontWeight: '700',
    },
});

