import { FC, useCallback } from "react";
import { Button, Text, View } from "react-native";
import { Props } from "./types";
import { useNavigation } from "@react-navigation/native";

export const UploadCVScreen: FC<Props> = () => {
    const { navigate } = useNavigation()

    const onPress = useCallback(() => {
        navigate('JobListScreen', {
            email: 'sendyakbar@mail.com',
        })
    }, [navigate])

    return (
        <View>
            <Text>
                Hello world
            </Text>
            <Button title="Job List" onPress={onPress} />
        </View>
    )
}