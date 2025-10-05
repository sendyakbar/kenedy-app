import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UploadCVScreen } from "../screens/UploadCV/UploadCVScreen";
import { JobListScreen } from "../screens/JobList/JobListScreen";
import { StaticParamList } from "@react-navigation/native";

export const RootNavigator = createNativeStackNavigator({
    screens: {
        UploadCVScreen: {
            screen: UploadCVScreen,
            options: { title: 'Upload CV' },
        },
        JobListScreen: {
            screen: JobListScreen,
            options: { title: 'Job List' }
        },
    },
})

export type RootNavigatorParamList = StaticParamList<typeof RootNavigator>