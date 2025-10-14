import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { FormInput } from '../common/FormInput';
import { FormData } from './types';

interface ProfileFormProps {
    formData: FormData;
    focusedField: string | null;
    onInputChange: (field: keyof FormData, value: string) => void;
    onFocus: (field: string) => void;
    onBlur: () => void;
}

export const ProfileForm: FC<ProfileFormProps> = ({
    formData,
    focusedField,
    onInputChange,
    onFocus,
    onBlur,
}) => {
    return (
        <View style={styles.container}>
            <FormInput
                label="Full Name"
                value={formData.name}
                onChangeText={(value) => onInputChange('name', value)}
                placeholder="Enter your full name"
                isFocused={focusedField === 'name'}
                onFocus={() => onFocus('name')}
                onBlur={onBlur}
            />

            <FormInput
                label="Education"
                value={formData.education}
                onChangeText={(value) => onInputChange('education', value)}
                placeholder="e.g., Bachelor's in Computer Science, MIT"
                multiline
                numberOfLines={3}
                isFocused={focusedField === 'education'}
                onFocus={() => onFocus('education')}
                onBlur={onBlur}
            />

            <FormInput
                label="Experience"
                value={formData.experience}
                onChangeText={(value) => onInputChange('experience', value)}
                placeholder="Describe your work experience and achievements"
                multiline
                numberOfLines={4}
                isFocused={focusedField === 'experience'}
                onFocus={() => onFocus('experience')}
                onBlur={onBlur}
            />

            <FormInput
                label="Skills"
                value={formData.skills}
                onChangeText={(value) => onInputChange('skills', value)}
                placeholder="e.g., JavaScript, React Native, Node.js, Leadership"
                multiline
                numberOfLines={3}
                isFocused={focusedField === 'skills'}
                onFocus={() => onFocus('skills')}
                onBlur={onBlur}
            />

            <FormInput
                label="Job Preferences"
                value={formData.preferences}
                onChangeText={(value) => onInputChange('preferences', value)}
                placeholder="Describe your ideal job, work environment, and career goals"
                multiline
                numberOfLines={4}
                isFocused={focusedField === 'preferences'}
                onFocus={() => onFocus('preferences')}
                onBlur={onBlur}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 24,
    },
});

