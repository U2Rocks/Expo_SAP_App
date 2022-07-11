import Header from "../components/Header"
import PetList from "../components/PetList"
import Search from "../components/Search"
import { StyleSheet, View, Text, SafeAreaView } from "react-native"
import { useState } from "react"

export default function HomeScreen({ navigation }) {

    const [searchVal, setSearchVal] = useState("")


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Super Auto Helper" />
            <Search searchFunction={setSearchVal} currentSearch={searchVal}/>
            <PetList navigate={navigation} filterValue={searchVal}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#6b7db3",
      textAlign: "center",
      flex: 1,
    },
  });