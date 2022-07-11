import { View, TextInput, StyleSheet } from 'react-native'
import {FontAwesome} from "@expo/vector-icons";
import { useState } from 'react'

export default function Search({ searchFunction, currentSearch }) {
    const [userInput, setUserInput] = useState("")


    // this function should do something to update the list
    const handleEndEditing = () => {
        if(!userInput) {
            searchFunction("")
            return
        }
        searchFunction(userInput)
        setUserInput("")
    }

    const resetSearch = () => {
        searchFunction("")
    }

    // IMPORTANT: list activity order: person clicks search -> searchVal resets -> person edits box -> searchVal set to userInput
    // --userInput is reset to a falsy value -> on focus searchVal resets -> cycle continues...


    // NOTE: text input needs more options
    // FUTURE: this element will later take in a function to change the searchterm state from the home page

    return (
        <View style={styles.container}>
            <FontAwesome size={25} name="search" style={styles.imageS}/>
            <TextInput 
            value={userInput}
            placeholder={currentSearch ? currentSearch : "Enter a pet here..."}
            onChangeText={(text) => {setUserInput(text)}}
            onEndEditing={handleEndEditing}
            onFocus={resetSearch}
            />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        borderRadius: 40,
        backgroundColor: "#CCD9FF",
        color: "white",
        padding: 10,
        flexDirection: 'row',
    },
    textInput: {
        fontSize: 23,
        marginLeft: 20,
    },
    imageS: {
        marginRight: 10,
    }


})