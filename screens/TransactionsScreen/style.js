import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
    },
    recentList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15
    },
    recentText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3ba5ff',
    },
    seeAllText: {
        color: '#4d3fb5',
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default styles;
