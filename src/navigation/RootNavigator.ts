import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StaticParamList } from "@react-navigation/native";
import { ProfileScreen } from "../screens/Profile/ProfileScreen";
import { ExperiencesScreen } from "../screens/Experiences/ExperiencesScreen";
import { JobMatchesScreen } from "../screens/JobMatches/JobMatchesScreen";

export const rootScreensConfig = {
    screens: {
        ProfileScreen: {
            screen: ProfileScreen,
            options: { headerShown: false },
        },
        ExperiencesScreen: {
            screen: ExperiencesScreen,
            options: { headerShown: false },
        },
        JobMatchesScreen: {
            screen: JobMatchesScreen,
            options: { headerShown: false },
        },
    },
} as const;

export const RootNavigator = createNativeStackNavigator(rootScreensConfig)

export type RootNavigatorParamList = StaticParamList<typeof RootNavigator>