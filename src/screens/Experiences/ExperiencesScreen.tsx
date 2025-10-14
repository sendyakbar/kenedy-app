import { FC, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Props } from "./types";
import { ScreenHeader, Button } from "../../components/common";
import { ExperiencesList, ExperienceFormData } from "../../components/Experiences";
import { colors } from "../../themes/colors";

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

    const handleItemRemove = (index: number) => {
        setExperiences(prev => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev))
    }

    const handleAddExperience = () => {
        setExperiences(prev => [...prev, createEmptyExperience()])
    }

    const handleContinue = () => {
        // TODO: optionally validate experiences then navigate to JobMatches
        // navigation.navigate('JobMatchesScreen')
    }

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
            <ScreenHeader
                title="Your Experience(s)"
                subtitle="Add one or more experiences to strengthen your profile"
            />

            <ExperiencesList items={experiences} onItemChange={handleItemChange} onItemRemove={handleItemRemove} />

            <View style={styles.actionsRow}>
                <Button title="Add Experience" onPress={handleAddExperience} variant="outline" />
            </View>

            <View style={styles.cta}>
                <Button title="Continue" onPress={handleContinue} variant="secondary" />
            </View>

            <View style={styles.bottomSpacing} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
    },
    scrollView: { flex: 1 },
    scrollViewContent: { flexGrow: 1 },
    actionsRow: {
        marginHorizontal: 24,
        marginTop: 24,
    },
    spacer: { width: 12 },
    cta: {
        marginHorizontal: 24,
        marginTop: 16,
    },
    bottomSpacing: { height: 32 },
})