import { SafeAreaView, Text, StyleSheet, ActivityIndicator } from "react-native";
import HeaderBack from "../components/PetInfoParts/HeaderBack";
import ChangeArea from "../components/PetInfoParts/ChangeArea";
import InfoChart from "../components/PetInfoParts/InfoChart";
import PictureBox from "../components/PetInfoParts/PictureBox";
import usePets from "../hooks/usePets";
import { useEffect } from 'react'


// this screen should populate the page with info on a specific pet
// try and use a chart of some setup to show alot of information succintly


// Header(reused from earlier)
// Pack number
// Picture
// Chart: base stats and effect for each level
// Notes and changelog: each note is a component

// params can be passed through routes
// add touchable opacity to pet cards that passes name of pet to info screen
// create loading variable that displays loading symbol if data not received
// use pets hook to get data in form of current animal

export default function PetInfoScreen({ navigation, route }) {

    const { petName } = route.params;

    const dummyLoad = {
        "levelone": {
          "attack": -1,
          "effect": "N/A",
          "health": -1,
        },
        "levelthree": {
          "attack": -1,
          "effect": "N/A",
          "health": -1,
        },
        "leveltwo": {
          "attack": -1,
          "effect": "N/A",
          "health": -1,
        }
    }

    const fakeNotes = [
        {
            changeNum: 1,
            patchNum: 1.3,
            note: "Pig health increased to 77"
        },
        {
            changeNum: 2,
            patchNum: 1.7,
            note: "Lion health reduced to 88"
        },
        {
            changeNum: 3,
            patchNum: 2.1,
            note: "Beaver health increased to 5"
        },
        {
            changeNum: 4,
            patchNum: 2.4,
            note: "Fish health reduced to 11"
        },
    ]

    const [prev, current, errorM, petInfo] = usePets()

    useEffect(() =>{
    petInfo(petName)
    // console.log(current)
    // console.log("petName: " + petName)
    }, [])



    return (
        <SafeAreaView style={styles.container}>
            <PictureBox pack={current.data ? current.data.pack : -1} aTier={current.data ? current.data.tier : -1} passData={petName}/>
            <InfoChart chartData={current.data ? current.data : dummyLoad}/>
            <ChangeArea changeData={current.data ? current.data.changes : fakeNotes}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#6b7db3"
    }
})