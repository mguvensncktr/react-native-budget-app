import React from 'react'
import { View, Text } from 'react-native'
import TransactionList from '../../components/TransactionList'
import styles from './style'

const TransactionsScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.recentList}>
                <Text style={styles.recentText}>All Transactions</Text>
            </View>
            <TransactionList />
        </View>
    )
}

export default TransactionsScreen
