import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 10
    },
    header: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#2e1f3d',
    },
    descriptionText: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2e1f3d',
    },
    descInput: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 50,
        width: 250,
        marginTop: 10,
        height: 40
    },
    button: {
        height: 40,
        width: 120,
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#2e1f3d'
    }
})

export default styles;
