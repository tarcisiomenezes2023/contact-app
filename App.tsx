import { StatusBar } from "react-native"
import { Home } from "@/app/home/index"
import { Loading } from "@/components/loading"
import { useFonts, Ubuntu_700Bold, Ubuntu_500Medium,
Ubuntu_400Regular } from "@expo-google-fonts/ubuntu"
import { GestureHandlerRootView } from "react-native-gesture-handler"

export default function App() {
  const [fonstLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
  })

  if (!fonstLoaded) {
    return <Loading />
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content"
       backgroundColor="transparent"
       translucent />
      <Home />
    </GestureHandlerRootView>
  )
}


