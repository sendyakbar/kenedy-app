import { FC, useState } from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert
} from "react-native";
import { Props } from "./types";
import { useNavigation } from "@react-navigation/native";
import { ScreenHeader, Button } from "../../components/common";
import { ProfileForm } from "../../components/Profile";
import type { FormData } from "../../components/Profile/types";
import { colors } from "../../themes/colors";

export const ProfileScreen: FC<Props> = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        education: '',
        experience: '',
        skills: '',
        preferences: ''
    });

    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev: FormData) => ({
            ...prev,
            [field]: value
        }));
    };

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            Alert.alert('Validation Error', 'Please enter your name');
            return false;
        }
        if (!formData.education.trim()) {
            Alert.alert('Validation Error', 'Please enter your education background');
            return false;
        }
        if (!formData.experience.trim()) {
            Alert.alert('Validation Error', 'Please enter your experience');
            return false;
        }
        if (!formData.skills.trim()) {
            Alert.alert('Validation Error', 'Please enter your skills');
            return false;
        }
        if (!formData.preferences.trim()) {
            Alert.alert('Validation Error', 'Please enter your preferences');
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            // Navigate to experiences screen
            navigation.navigate('ExperiencesScreen');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <ScreenHeader
                    title="Build Your Profile"
                    subtitle="Tell us about yourself to find your perfect job match"
                />

                <ProfileForm
                    formData={formData}
                    focusedField={focusedField}
                    onInputChange={handleInputChange}
                    onFocus={setFocusedField}
                    onBlur={() => setFocusedField(null)}
                />

                <View style={styles.buttonContainer}>
                    <Button
                        title="Continue"
                        onPress={handleSubmit}
                        variant="secondary"
                    />
                </View>

                <View style={styles.bottomSpacing} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BACKGROUND,
    },
    scrollView: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    buttonContainer: {
        marginHorizontal: 24,
        marginTop: 32,
    },
    bottomSpacing: {
        height: 32,
    },
});