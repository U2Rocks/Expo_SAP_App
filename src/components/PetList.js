import { View, Text, StyleSheet, FlatList } from "react-native"
import { NameList } from "../pets/PetNames"
import PetCard from "../components/PetCard"

export default function PetList({ navigate, filterValue }) {


    const filteredNames = filterValue ? NameList.filter( f => f.name.includes(filterValue)) : null


    return (
        <View style={styles.container}>
            <FlatList
            data={filterValue ? filteredNames : NameList}
            keyExtractor={(pet) => pet.id}
            renderItem={({item}) => <PetCard Name={item.name} navigation={navigate}/>}
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
            horizontal={false}
            getItemLayout={(data, index) => ({
                length: NameList.length,
                offset: NameList.length * index,
                index
            })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 10,
        height: '78%',
    },
    headerText: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
})