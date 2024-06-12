import { Home } from "@/app/home/index"
import { Loading } from "@/components/loading"
import { useFonts, Ubuntu_700Bold, Ubuntu_500Medium,
Ubuntu_400Regular } from "@expo-google-fonts/ubuntu"


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
    <Home />
  )
}


