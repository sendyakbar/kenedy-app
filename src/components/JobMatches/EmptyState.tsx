import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { EmptyStateProps } from "./types";
import { colors } from "../../themes/colors";

export const EmptyState: FC<EmptyStateProps> = ({ 
    title = "No Job Matches Yet",
    subtitle = "We're analyzing your profile to find the best opportunities for you.",
    icon = "🔍"
}) => {
    return (
        <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>{icon}</Text>
            <Text style={styles.emptyTitle}>{title}</Text>
            <Text style={styles.emptySubtitle}>{subtitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    emptyState: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 60,
        paddingHorizontal: 40,
    },
    emptyIcon: {
        fontSize: 64,
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: colors.PRIMARY,
        marginBottom: 8,
        textAlign: 'center',
    },
    emptySubtitle: {
        fontSize: 15,
        color: colors.TEXT_SECONDARY,
        textAlign: 'center',
        lineHeight: 22,
    },
});

