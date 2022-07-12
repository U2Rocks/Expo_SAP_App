import { View, Text, StyleSheet, FlatList } from "react-native"
import { NameList } from "../pets/PetNames"
import PetCard from "../components/PetCard"

export default function PetList({ navigate, filterValue }) {


    const filteredNames = filterValue ? NameList.filter( f => f.name.includes(filterValue)) : null

    const renderCard = ({item}) => <PetCard Name={item.name} navigation={navigate}/>

    const extractKeys = (pet, index) => pet.id

    const getItemsLayout = (data, index) => ({
        length: 60,
        offset: 60 * index,
        index
    })


    return (
        <View style={styles.container}>
            <FlatList
            data={filterValue ? filteredNames : NameList}
            keyExtractor={(pet, index) => pet.id}
            renderItem={renderCard}
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
            horizontal={false}
            getItemLayout={getItemsLayout}
            removeClippedSubviews={true}
            initialNumToRender={7}
            maxToRenderPerBatch={5}
            style={styles.list}
            windowSize={10}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 10,
        height: '72%',
    },
    headerText: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        textDecorationLine: "underline",
    },
    list: {
        width: '100%',
    },
})