import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 54,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.blue,
    },
    title: {
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fontFamily.medium,
    },
})