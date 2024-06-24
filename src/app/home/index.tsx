import { useState, useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/input";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Contact } from "@/components/contact";
import * as Contacts from "expo-contacts";

export function Home() {
    const [name, setName] = useState("");

    async function fetchContacts() {
        try {
            const { status } = await Contacts.requestPermissionsAsync();

            if (status === Contacts.PermissionStatus.GRANTED) {
                const { data } = await Contacts.getContactsAsync();
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.input}>
                    <Feather name="search" size={16} color={theme.colors.gray_300} />
                    <Input.Field 
                        placeholder="Search for name..."
                        onChangeText={setName}
                        value={name} 
                    />
                    <TouchableOpacity onPress={() => setName("")}>
                        <Feather name="x" size={16} color={theme.colors.gray_300} />
                    </TouchableOpacity>
                </Input>
            </View>

            <Contact contact={{
                name: "Tarcísio",
                image: require("@/assets/hero.png")
            }} />
        </View>
    );
}