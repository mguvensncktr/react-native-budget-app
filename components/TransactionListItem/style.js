import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    icon: {
        backgroundColor: '#a296ff',
        borderRadius: 10,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    descContainer: {
        marginLeft: 10,
        alignSelf: 'center',
        flex: 1
    },
    descText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    dateText: {
        color: 'lightgray',
        fontWeight: '500',
        marginTop: 5
    },
    amountText: {
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon2: {
        backgroundColor: '#2e1f3d',
        borderRadius: 10,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    amountText2: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold'
    },
})

export default styles;
