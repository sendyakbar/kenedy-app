import { FC } from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const Button: FC<ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'large',
    fullWidth = false,
    style,
    textStyle,
    ...rest
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                styles[`${variant}Button`],
                styles[`${size}Button`],
                fullWidth && styles.fullWidth,
                style
            ]}
            onPress={onPress}
            activeOpacity={0.8}
            {...rest}
        >
            <Text style={[
                styles.buttonText,
                styles[`${variant}ButtonText`],
                styles[`${size}ButtonText`],
                textStyle
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullWidth: {
        width: '100%',
    },
    // Variants
    primaryButton: {
        backgroundColor: '#0a1542',
        shadowColor: '#4299E1',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    secondaryButton: {
        backgroundColor: '#277bf5',
        shadowColor: '#718096',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    outlineButton: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#4299E1',
    },
    // Sizes
    smallButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    mediumButton: {
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    largeButton: {
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    // Text styles
    buttonText: {
        fontWeight: '700',
        letterSpacing: 0.5,
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    secondaryButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    outlineButtonText: {
        color: '#4299E1',
        fontSize: 18,
    },
    smallButtonText: {
        fontSize: 14,
    },
    mediumButtonText: {
        fontSize: 16,
    },
    largeButtonText: {
        fontSize: 18,
    },
});

