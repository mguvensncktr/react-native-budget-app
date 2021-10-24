import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#3ba5ff',
    },
    userContainer: {
        marginLeft: 15,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#3f4245',
    },
    usernameText: {
        fontSize: 24,
        color: '#3ba5ff',
        fontWeight: 'bold',
    }
})

export default styles;
