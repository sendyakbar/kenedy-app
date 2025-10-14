import { FC, useState } from "react";
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Props } from "./types";
import { ScreenHeader, Button } from "../../components/common";
import { ExperiencesList, ExperienceFormData } from "../../components/Experiences";

const createEmptyExperience = (): ExperienceFormData => ({
    title: '',
    company: '',
    duration: '',
    description: '',
})

export const ExperiencesScreen: FC<Props> = () => {
    const [experiences, setExperiences] = useState<ExperienceFormData[]>([createEmptyExperience()])

    const handleItemChange = (index: number, field: keyof ExperienceFormData, value: string) => {
        setExperiences(prev => {
            const next = [...prev]
            next[index] = { ...next[index], [field]: value }
            return next
        })
    }

    const handleAddExperience = () => {
        setExperiences(prev => [...prev, createEmptyExperience()])
    }

    const handleRemoveLast = () => {
        setExperiences(prev => (prev.length > 1 ? prev.slice(0, -1) : prev))
    }

    const handleContinue = () => {
        // TODO: optionally validate experiences then navigate to JobMatches
        // navigation.navigate('JobMatchesScreen')
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                <ScreenHeader
                    title="Your Experiences"
                    subtitle="Add one or more experiences to strengthen your profile"
                />

                <ExperiencesList items={experiences} onItemChange={handleItemChange} />

                <View style={styles.actionsRow}>
                    <Button title="Add Experience" onPress={handleAddExperience} variant="primary" />
                    <View style={styles.spacer} />
                    <Button title="Remove Last" onPress={handleRemoveLast} variant="primary" />
                </View>

                <View style={styles.cta}>
                    <Button title="Continue" onPress={handleContinue} variant="secondary" />
                </View>

                <View style={styles.bottomSpacing} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFC',
    },
    scrollView: { flex: 1 },
    scrollViewContent: { flexGrow: 1 },
    actionsRow: {
        marginHorizontal: 24,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    spacer: { width: 12 },
    cta: {
        marginHorizontal: 24,
        marginTop: 24,
    },
    bottomSpacing: { height: 32 },
})