import { createStaticNavigation } from "@react-navigation/native";
import { FC, useCallback } from "react";
import BootSplash from "react-native-bootsplash";
import { RootNavigator } from "./src/navigation/RootNavigator";

const Navigation = createStaticNavigation(RootNavigator)

export const App: FC = () => {
  const onReady = useCallback(() => {
    BootSplash.hide({ fade: true })
  }, [])

  return (
    <Navigation
      onReady={onReady}
    />
  )
}