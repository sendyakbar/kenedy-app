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
            options: { title: 'Your Experience(s)' },
        },
        JobMatchesScreen: {
            screen: JobMatchesScreen,
            options: { title: 'Job Matches For You' },
        },
    },
} as const;

export const RootNavigator = createNativeStackNavigator(rootScreensConfig)

export type RootNavigatorParamList = StaticParamList<typeof RootNavigator>