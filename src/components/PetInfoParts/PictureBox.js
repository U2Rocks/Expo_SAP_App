import { View, Text, StyleSheet, Image } from 'react-native'


// this component shows an image of the pet and display its pack number

// image for pet must be 100 x 100 pixels

// ***need name from PARAM and pack from HOOK***


{/* <View style={styles.imageContainer}>
        <Image source={link}/>   
</View> */}

export default function PictureBox({ pack, passData, aTier }){

    return (
        <View style={styles.container}>
            <Text style={styles.caption}>{passData}(Pack #{pack})[Tier #{aTier}]</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ccd9ff",
        alignItems: 'center',
    },
    imageContainer: {
    },
    caption: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    image: {
        resizeMode: "cover",
        height: 100,
        width: 100,
    }
})