import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { FormInput } from '../common/FormInput'
import { ExperienceFormData } from './types'
import { Button } from '../common/Button'
import { colors } from '../../themes/colors'

interface Props {
    value: ExperienceFormData
    index: number
    onChange: (index: number, field: keyof ExperienceFormData, value: string) => void
    onRemove?: (index: number) => void
}

export const ExperienceItemForm: FC<Props> = ({ value, index, onChange, onRemove }) => {
    const showRemove = typeof onRemove === 'function' && index !== 0

    return (
        <View style={styles.card}>
            <FormInput
                label="Title"
                value={value.title}
                onChangeText={(text) => onChange(index, 'title', text)}
                placeholder="e.g., Senior Software Engineer"
            />
            <FormInput
                label="Company"
                value={value.company}
                onChangeText={(text) => onChange(index, 'company', text)}
                placeholder="e.g., Tech Corp"
            />
            <FormInput
                label="Duration"
                value={value.duration}
                onChangeText={(text) => onChange(index, 'duration', text)}
                placeholder="e.g., 2 years"
            />
            <FormInput
                label="Description"
                value={value.description}
                onChangeText={(text) => onChange(index, 'description', text)}
                placeholder="Describe your role, responsibilities, and achievements"
                multiline
                numberOfLines={4}
            />

            {showRemove && (
                <View style={styles.removeRow}>
                    <Button
                        title="Remove"
                        variant="primary"
                        onPress={() => onRemove(index)}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.WHITE,
        marginHorizontal: 24,
        marginTop: 16,
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: colors.BORDER,
        shadowColor: colors.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
    },
    removeRow: {
        marginTop: 8,
    },
})
