import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StaticParamList } from "@react-navigation/native";
import { ProfileScreen } from "../screens/Profile/ProfileScreen";
import { ExperiencesScreen } from "../screens/Experiences/ExperiencesScreen";
import { JobMatchesScreen } from "../screens/JobMatches/JobMatchesScreen";

export const RootNavigator = createNativeStackNavigator({
    screens: {
        ProfileScreen: {
            screen: ProfileScreen,
            options: { title: 'Your Profile' },
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
})

export type RootNavigatorParamList = StaticParamList<typeof RootNavigator>