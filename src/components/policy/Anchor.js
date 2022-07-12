import React from 'react'

import { Text, StyleSheet } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

const handlePress = (href) => {
    WebBrowser.openBrowserAsync(href)
}

const Anchor = (props) => {
    return (
        <Text  {...props} style={styles.texty} onPress={() => handlePress(props.href)}>
            {props.children}
        </Text>
    )
}

export default Anchor

const styles = StyleSheet.create({
    texty: {
        textAlign: 'center',
        color: '#eb6e34',
        marginBottom: 10,
        fontSize: 25,
    }
})