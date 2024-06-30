import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray_200
    },
    header: {
        width: "100%",
        height: 132,
        backgroundColor: theme.colors.blue,
        justifyContent: "flex-end",
        paddingHorizontal: 24,
    },
    input: {
        marginBottom: -27,
    },
    section: {
        fontSize: 18,
        fontFamily: theme.fontFamily.bold,
        backgroundColor: theme.colors.blue,
        width: 34,
        height: 34,
        color: theme.colors.white,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 12,
        marginTop: 32,
    },
    contentList: {
        padding: 24,
        gap: 12,
        paddingTop: 64,
    }
})