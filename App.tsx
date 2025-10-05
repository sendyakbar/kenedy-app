import { createStaticNavigation } from "@react-navigation/native";
import { FC } from "react";
import { RootNavigator } from "./src/navigation/RootNavigator";

const Navigation = createStaticNavigation(RootNavigator)

export const App: FC = () => {
  return (
    <Navigation />
  )
}