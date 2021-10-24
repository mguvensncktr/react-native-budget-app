import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import data from '../../data/data';

const UserGreeting = (props) => {
    const { username } = props;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://nobleorderbrewing.com/img/lists/97/boruto-5-ways-sasuke-losing-his-rinnegan-makes-sense.jpg' }} />
            <View style={styles.userContainer}>
                <Text style={styles.welcomeText}>Welcome,</Text>
                <Text style={styles.usernameText}>{username}</Text>
            </View>
        </View>
    )
}

export default UserGreeting;
