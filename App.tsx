import { createStaticNavigation } from "@react-navigation/native";
import { FC, useCallback } from "react";
import BootSplash from "react-native-bootsplash";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient
const Navigation = createStaticNavigation(RootNavigator)

export const App: FC = () => {
  const onReady = useCallback(() => {
    BootSplash.hide({ fade: true })
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation
        onReady={onReady}
      />
    </QueryClientProvider>
  )
}