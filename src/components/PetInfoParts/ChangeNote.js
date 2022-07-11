import { View, Text, StyleSheet } from 'react-native'

export default function ChangeNote({ Animal }) {

    // console.log(Animal)


    return (
        <View style={styles.container}>
            <Text style={styles.headerChangeText}>{Animal.item.patchNum}</Text>
            <Text style={styles.changeText}>{Animal.item.note}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "white",
        marginHorizontal: 10,
        borderRadius: 25,
        marginBottom: 10,
        borderWidth: 2,
    },
    changeText: {
        fontSize: 20,
        color: "black",
    },
    headerChangeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "black",
    },
})