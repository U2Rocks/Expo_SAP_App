
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


    return (
        <TouchableOpacity onPress={() => navigation.navigate('Pet Info', { petName: Name })}>
        <View style={[styles.container, isTouched ? {backgroundColor: "#9999FF"}: {backgroundColor: "#E6ECFF"}]}>
            <Text style={[styles.cardHeader, isTouched ? {color: "white"} : {color: "black"}]}>{Name}</Text>
        </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 10,
        borderRadius: 25,
        backgroundColor: "#E6ECFF",
        padding: 15,
    },
    cardHeader: {
        fontWeight: "bold",
        fontSize: 19,
        textAlign: "center",
    },
})