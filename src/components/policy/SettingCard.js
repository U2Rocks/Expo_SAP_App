import { View, StyleSheet } from 'react-native'
import Anchor from "./Anchor.js"

// this needs to be linked to from home screen

export default function SettingCard() {

    return (
    <View style={styles.legalSection}>
        <View style={styles.link}>
            <Anchor href="https://u2rocks.github.io/Expo_SAP_App/privacy.html">
                Privacy Policy
            </Anchor>
        </View>
        <View style={styles.link}>
            <Anchor href="https://u2rocks.github.io/Expo_SAP_App/terms_and_conditions.html">
                Terms and Conditions
            </Anchor>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    legalSection: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: "#ffffff",
    },
    link: {
        color: "red",
        fontSize: 20,
        textAlign: 'center',
    },
})