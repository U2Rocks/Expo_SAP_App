import { View, FlatList, StyleSheet } from 'react-native'
import { NameList } from '../pets/PetNames'
import PetCard from './PetCard'


// This component is currently not being used


export default function ListWrapper() {
    return (
        <View style={styles.container}>
            <FlatList
            data={NameList}
            keyExtractor={(pet) => pet.id}
            renderItem={({item}) => <PetCard Name={item.name} />}
            scrollEnabled={true}
            showsVerticalScrollIndicator={true}
            horizontal={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '85%',
    },
})