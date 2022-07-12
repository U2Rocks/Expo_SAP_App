import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'



export default function SettingLink({ navigation }){

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <View style={styles.container}>
                <Text style={styles.linktext}>Data Policies</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        paddingRight: 10,
        paddingBottom: 10,
    },
    linktext: {
        fontSize: 15,
        color: "black",
        fontWeight: 'bold',
        textAlign: 'center',
    },
})