import { FC } from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import { colors } from "../../themes/colors";

export const AbsoluteLoading: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ActivityIndicator size={40} color={colors.SECONDARY} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    card: {
        backgroundColor: colors.WHITE,
        height: 80,
        width: 80,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
})