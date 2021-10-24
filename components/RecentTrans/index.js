import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/native'

const RecentTrans = () => {

    const navigation = useNavigation();
    const onPressSeeAll = () => {
        navigation.navigate('Transactions')
    }
    return (
        <View>
            <View style={styles.recentList}>
                <Text style={styles.recentText}>Recent Transactions</Text>
                <TouchableOpacity onPress={onPressSeeAll}>
                    <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RecentTrans;
