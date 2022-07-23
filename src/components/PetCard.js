
import { View, StyleSheet, Text, TouchableOpacity} from "react-native"
import { useState } from "react"

export default function PetCard({ Name, navigation }) {

    const [isTouched, setIsTouched] = useState(false)

    function handleBasicPress() {
        if (isTouched === false){
            setIsTouched(true)
        } else {
            setIsTouched(false)
        }
    }

    function navigateToInfo() {
        navigation.navigate('Pet Info', { petName: Name })
    }


    return (
        <TouchableOpacity onPress={navigateToInfo}>
        <View style={[styles.container]}>
            <Text style={[styles.cardHeader]}>{Name}</Text>
        </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: "3%",
        marginTop: 10,
        borderRadius: 25,
        backgroundColor: "#E6ECFF",
        padding: 15,
        height: 60,
    },
    cardHeader: {
        fontWeight: "bold",
        fontSize: 19,
        textAlign: "center",
    },
})