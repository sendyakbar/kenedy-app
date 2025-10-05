import { RootNavigatorParamList } from "../navigation/RootNavigator";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootNavigatorParamList {}
    }
  }