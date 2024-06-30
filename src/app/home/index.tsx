import { useState, useEffect, useId } from "react";
import { View, Text, TouchableOpacity, SectionList } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/input";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Contact, ContactProps } from "@/components/contact";
import * as Contacts from "expo-contacts";

type SectionListDataProps ={
    title: string
    data: ContactProps
}

export function Home() {
    const [name, setName] = useState("");
    const [contacts, setContacts] = useState<SectionListDataProps[]>([])

    async function fetchContacts() {
        try {
            const { status } = await Contacts.requestPermissionsAsync();

            if (status === Contacts.PermissionStatus.GRANTED) {
                const { data } = await Contacts.getContactsAsync();
                const list = data.map(( contact) => ({
                    id: contact.id ?? useId(),
                    name: contact.name,
                    image: contact.image
                }))
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

            
            <SectionList sections={contacts}
             keyExtractor={(item) => item.id}
             renderItem={({ item }) => (
                <Contact contact={{
                    name: item.name,
                    image: require("@/assets/hero.png")
                }} 
                />
            )}
            renderSectionHeader={({ section  }) => (
                <Text style={styles.section}>{section.title}</Text>
            )}
            contentContainerStyle={styles.contentList}/>
        </View>
    );
}