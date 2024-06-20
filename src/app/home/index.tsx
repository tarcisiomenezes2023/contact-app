import { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/input"
import { Feather } from "@expo/vector-icons"
import { theme } from "@/theme";

export function Home() {
    const [name, setName] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                    <Feather name="search" size={16} color={theme.colors.gray_300} />
                    <Input.Field placeholder="Search for name..."
                    onChangeText={setName}
                    value={name} />
                    <TouchableOpacity onPress={() => setName("")}>
                        <Feather name="x" size={16} 
                        color={theme.colors.gray_300}
                        />
                    </TouchableOpacity>
                </Input>
            </View>
        </View>
    )
}