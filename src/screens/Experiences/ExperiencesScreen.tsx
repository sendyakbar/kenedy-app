import { FC, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Props } from "./types";
import { ScreenHeader, Button } from "../../components/common";
import { ExperiencesList, ExperienceFormData } from "../../components/Experiences";
import { colors } from "../../themes/colors";
import { usePostExperiences } from "../../services/queries/experiences/usePostExperiences";
import { AbsoluteLoading } from "../../components/common/AbsoluteLoading";
import { ExperiencesRequest } from "../../services/models/experiences/types";

const createEmptyExperience = (): ExperienceFormData => ({
    title: '',
    company: '',
    duration: '',
    description: '',
})

export const ExperiencesScreen: FC<Props> = ({ route }) => {
    const { userId } = route.params
    const [experiences, setExperiences] = useState<ExperienceFormData[]>([createEmptyExperience()])

    const {
        mutate,
        isPending,
    } = usePostExperiences({
        onSuccess: () => {},
    })

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
        const payload: ExperiencesRequest = experiences.map((d) => ({
            user_id: Number(userId),
            ...d,
        }))
        mutate(payload)
    }

    return (
        <>
            {isPending ? <AbsoluteLoading /> : null}
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
        </>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
    },
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