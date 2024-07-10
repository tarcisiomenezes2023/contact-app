import { Text, TouchableOpacity, TouchableOpacityProps, ImageProps } from "react-native"; 
import { styles } from "./styles";
import { Avatar } from "../avatar";

export type ContactProps = {
    id: string,
    name: string,
    image?: ImageProps,
}

type Props = TouchableOpacityProps & {
    contact: ContactProps
}

export function Contact ({ contact, ...rest }: Props) {
    return <TouchableOpacity style={styles.container} {...rest}>
        <Avatar name="Tarcísio" image={contact.image}/>
        <Text style={styles.name}>{contact.name}</Text>
    </TouchableOpacity>
} 