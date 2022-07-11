import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native'
import ChangeNote from './ChangeNote'


// --this component loads a flatlist of change notes
// --change notes can be provided via a list of objects each containing text
// and a title for the change

// image for pet must be 100 x 100 pixels


export default function ChangeArea({ changeData }){


    const testNotes = [
        {
            changeNum: 1,
            patchNum: 1.16,
            note: "Pig health reduced to 1"
        },
        {
            changeNum: 2,
            patchNum: 1.18,
            note: "Pig health reduced to 2"
        },
        {
            changeNum: 3,
            patchNum: 1.19,
            note: "Pig health reduced to 3"
        },
        {
            changeNum: 4,
            patchNum: 1.20,
            note: "Pig effect changed to on sell give all current and future shop animals +1/+1 and sell for an additional 1 gold"
        },
        {
            changeNum: 5,
            patchNum: 1.21,
            note: "Pig effect changed to on sell give all current and future shop animals +1/+1 and sell for an additional 1 gold"
        },
        {
            changeNum: 6,
            patchNum: 1.22,
            note: "Pig effect changed to on sell give all current and future shop animals +1/+1 and sell for an additional 1 gold"
        },
        {
            changeNum: 7,
            patchNum: 1.23,
            note: "Pig effect changed to on sell give all current and future shop animals +1/+1 and sell for an additional 1 gold"
        },
        {
            changeNum: 8,
            patchNum: 1.24,
            note: "Pig effect changed to on sell give all current and future shop animals +1/+1 and sell for an additional 1 gold"
        },
    ]


    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Changes and Patch Notes</Text>
            <View style={styles.listWrap}>
                <FlatList
                    data={changeData ? changeData : testNotes}
                    keyExtractor={(item) => item.changeNum}
                    renderItem={(animal) => {
                        return(<ChangeNote Animal={animal}/>)
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CCD9FF",
        marginTop: 20,
    },
    titleText: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
    listWrap: {
        height: '68%',
    },
})