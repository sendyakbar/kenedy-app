import { FC } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../../themes/colors';

interface FormInputProps extends TextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    isFocused?: boolean;
    multiline?: boolean;
    numberOfLines?: number;
    onFocus?: () => void;
    onBlur?: () => void;
}

export const FormInput: FC<FormInputProps> = ({
    label,
    value,
    onChangeText,
    placeholder,
    isFocused = false,
    multiline = false,
    numberOfLines = 1,
    onFocus,
    onBlur,
    ...rest
}) => {
    const hasValue = value.length > 0;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[
                    styles.input,
                    multiline && styles.textArea,
                    isFocused && styles.inputFocused,
                    hasValue && styles.inputHasValue
                ]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.TEXT_SECONDARY}
                multiline={multiline}
                numberOfLines={numberOfLines}
                onFocus={onFocus}
                onBlur={onBlur}
                textAlignVertical={multiline ? 'top' : 'center'}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.TEXT_PRIMARY,
        marginBottom: 8,
        letterSpacing: 0.2,
    },
    input: {
        backgroundColor: colors.WHITE,
        borderWidth: 2,
        borderColor: colors.BORDER,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: colors.TEXT_PRIMARY,
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    textArea: {
        minHeight: 100,
        paddingTop: 14,
    },
    inputFocused: {
        borderColor: colors.SECONDARY,
        backgroundColor: colors.WHITE,
        shadowColor: '#4299E1',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    inputHasValue: {
        borderColor: '#CBD5E0',
    },
});

