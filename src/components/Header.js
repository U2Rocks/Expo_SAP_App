import { View, Text, StyleSheet } from 'react-native'

export default function Header({ title }) {


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 10,
        marginBottom: 20,
        justifyContent: 'center',
        backgroundColor: "#9999FF",
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white",
    },
})