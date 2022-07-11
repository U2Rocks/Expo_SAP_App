import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {FontAwesome} from "@expo/vector-icons";


export default function HeaderBack({ navigate }) {


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigate.navigate('Home')}>
                <FontAwesome name='arrow-left' size={45} style={styles.icon}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>Pet Info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "#9999FF",
    },
    headerText: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white",
    },
    icon: {
        marginRight: 70,
    },
})