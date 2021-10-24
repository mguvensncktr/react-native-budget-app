import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome, Feather } from '@expo/vector-icons';
import styles from './style'
import moment from 'moment';

const TransactionListItem = ({ transaction }) => {


    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={transaction.type === 'expense' ? styles.icon2 : styles.icon}>
                    {transaction.type === 'income' ?
                        <FontAwesome name="dollar" size={24} color="white" /> : <Feather name="dollar-sign" size={24} color="white" />}
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.descText}>{transaction.desc}</Text>
                    <Text style={styles.dateText}>{moment(transaction.createdAt).format("MMM/DD/YYYY")}</Text>
                </View>
                <View>
                    <Text style={transaction.type === 'income' ? styles.amountText : styles.amountText2}>{transaction.amount} TL</Text>
                </View>
            </View>
        </View>
    )
}

export default TransactionListItem;
