import { View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native'


// table for animal stats with mock data
// after styling is done implement props to get data or use hook

export default function InfoChart({ chartData }) {

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <View>
                    <View style={styles.headerRow}>
                        <Text style={styles.tableHead}>Level</Text>
                        <Text style={styles.tableHead}>Attack</Text>
                        <Text style={styles.tableHead}>Health</Text>
                        <Text style={styles.tableHead}>Effect</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.tableLevel}>1</Text>
                        <Text style={styles.tableBody}>{chartData.levelone.attack}</Text>
                        <Text style={styles.tableBody}>{chartData.levelone.health}</Text>
                        <Text style={styles.tableBody}>{chartData.levelone.effect}</Text>
                    </View>
                    <View style={styles.horizontalLine}><Text>-</Text></View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.tableLevel}>2</Text>
                        <Text style={styles.tableBody}>{chartData.leveltwo.attack}</Text>
                        <Text style={styles.tableBody}>{chartData.leveltwo.health}</Text>
                        <Text style={styles.tableBody}>{chartData.leveltwo.effect}</Text>
                    </View>
                    <View style={styles.horizontalLine}><Text>-</Text></View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.tableLevel}>3</Text>
                        <Text style={styles.tableBody}>{chartData.levelthree.attack}</Text>
                        <Text style={styles.tableBody}>{chartData.levelthree.health}</Text>
                        <Text style={styles.tableBody}>{chartData.levelthree.effect}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 15,
    },
    tableHead: {
        fontSize: 20,
        color: "white",
        fontWeight: 'bold',
        marginHorizontal: 30,
    },
    tableBody: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 30,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    tableLevel: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 30,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    headerRow: {
        flexDirection: 'row',
    },
    bodyRow:{
        flexDirection: 'row',
        backgroundColor: '#e6ecff'
    },
    horizontalLine: {
        borderWidth: .5,
    }
})