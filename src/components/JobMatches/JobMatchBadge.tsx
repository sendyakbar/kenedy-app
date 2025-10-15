import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { JobMatchBadgeProps } from "./types";
import { colors } from "../../themes/colors";

export const JobMatchBadge: FC<JobMatchBadgeProps> = ({ score }) => {
    const scoreValue = typeof score === 'string' ? parseFloat(score) : score;
    const validScore = isNaN(scoreValue) ? 0 : scoreValue;
    const scorePercentage = Math.round(validScore * 100);
    
    const getScoreColor = (scr: number) => {
        if (scr >= 80) return '#10B981'; // green
        if (scr >= 60) return '#F59E0B'; // amber
        return '#EF4444'; // red
    };

    const scoreColor = getScoreColor(scorePercentage);

    return (
        <View style={[styles.scoreBadge, { backgroundColor: scoreColor }]}>
            <Text style={styles.scoreText}>{scorePercentage}%</Text>
            <Text style={styles.scoreLabel}>Match</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    scoreBadge: {
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 8,
        alignItems: 'center',
        minWidth: 70,
    },
    scoreText: {
        fontSize: 18,
        fontWeight: '800',
        color: colors.WHITE,
    },
    scoreLabel: {
        fontSize: 10,
        fontWeight: '600',
        color: colors.WHITE,
        marginTop: 2,
    },
});

