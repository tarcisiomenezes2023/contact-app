import { useState, useEffect, useId, useRef } from "react";
import { View, Text, TouchableOpacity, SectionList } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/input";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Contact, ContactProps } from "@/components/contact";
import * as Contacts from "expo-contacts";
import BottomSheet from "@gorhom/bottom-sheet"
import { Avatar } from "@/components/avatar";

type SectionListDataProps ={
    title: string
    data: ContactProps[]
}

export function Home() {
    const [name, setName] = useState("");
    const [contacts, setContacts] = useState<SectionListDataProps[]>([])

    const BottomSheet = useRef<BottomSheet>(null)

    async function fetchContacts() {
        try {
            const { status } = await Contacts.requestPermissionsAsync();

            if (status === Contacts.PermissionStatus.GRANTED) {
                const { data } = await Contacts.getContactsAsync({
                    name,
                    sort: "firstName",
                });
                const list = data.map(( contact) => ({
                    id: contact.id ?? useId(),
                    name: contact.name,
                    image: contact.image
                })).reduce<SectionListDataProps[]>((acc: any, item) => {
                    const firstLetter = item.name[0].toLocaleUpperCase()

                    const existingEntry = acc.find((entry: SectionListDataProps) => entry.title === 
                    firstLetter)

                    if (existingEntry) {
                        existingEntry.data.push(item)
                    } else {
                        acc.push({ title: firstLetter, data: [item] })
                    }

                },[])

                setContacts(list)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchContacts();
    }, [name]);

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
                <Contact 
                contact={item}
                />
            )}
            renderSectionHeader={({ section  }) => (
                <Text style={styles.section}>{section.title}</Text>
            )}
            contentContainerStyle={styles.contentList}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.Separator} />}
            />

            <BottomSheet ref={BottomSheet} snapPoints={[0.01, 284]}>
                <Avatar name="Tarcísio" />
            </BottomSheet>
        </View>
    );
}