import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function ErrorText({ message }){

    // this component is for if the info page messes up...
    // error message is passed in through message prop

    return (
        <View style={styles.container}>
            <Text style={styles.errorMsg}>Something Went Wrong...;;; message: {message}</Text>
            <ActivityIndicator size="large" color="red" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    errorMsg :{
        textAlign: "center",
        fontSize: 35,
        color: "black",
        padding: 15,
    }
})