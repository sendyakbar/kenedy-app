import { FC } from "react";
import { Props } from "./types";
import { Text, View } from "react-native";

export const JobMatchesScreen: FC<Props> = ({ route }) => {
    const { userId } = route.params

    console.log(userId)

    return (
        <View>
            <Text>
                Hello this is Job Matches Screen
            </Text>
        </View>
    )
}