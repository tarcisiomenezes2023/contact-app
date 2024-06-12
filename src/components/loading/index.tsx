import { ActivityIndicator } from "react-native";
import { styles } from "@/components/loading/styles"
import { theme } from "@/theme";


export function Loading() {
    return (
        <ActivityIndicator style={styles.loading}
         color={theme.colors.blue} />
    )
}