import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScreenHeaderProps {
    title: string;
    subtitle?: string;
}

export const ScreenHeader: FC<ScreenHeaderProps> = ({ title, subtitle }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && (
                <Text style={styles.subtitle}>{subtitle}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1A202C',
        marginBottom: 8,
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 16,
        color: '#718096',
        lineHeight: 24,
    },
});

