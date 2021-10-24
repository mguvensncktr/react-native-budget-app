import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './style';

const Header = () => {

    const onPressLogOut = () => {
        console.log('Logout pressed');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>My Wallet</Text>
                <TouchableOpacity style={styles.logOutText} onPress={onPressLogOut}>
                    <Text>Log out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Header
