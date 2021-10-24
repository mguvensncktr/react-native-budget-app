import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#494187',
        justifyContent: 'flex-end',
        borderRadius: 15,
        width: Dimensions.get('window').width - 10,
        alignSelf: 'center',
    },
    balanceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: '#a79cff',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        width: Dimensions.get('window').width - 25,
        marginTop: 20

    },
    totalBalanceText: {
        color: 'white',
        fontSize: 16,
    },
    totalBalance: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    },
    expenseTypeText: {
        color: 'black',
        fontWeight: '300',
        fontSize: 16,
    },
    expenseText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18
    },
    incomeContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    incomeTextIcon: {
        flexDirection: 'row',
    }
})

export default styles;
