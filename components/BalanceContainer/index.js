import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import styles from './style'
import { AntDesign } from '@expo/vector-icons';

const BalanceContainer = (props) => {

    const { incomes, expenses, balance } = props;

    return (
        <View style={styles.container}>
            <View style={styles.balanceContainer}>
                <Text style={styles.totalBalanceText}>
                    Balance
                </Text>
                <Text style={styles.totalBalance}>
                    {balance} TL
                </Text>
            </View>
            <View style={styles.innerContainer}>
                <View style={styles.incomeContainer}>
                    <View style={styles.incomeTextIcon}>
                        <AntDesign name="arrowup" size={24} color="green" />
                        <Text style={styles.expenseTypeText}>
                            Income
                        </Text>
                    </View>
                    <Text style={styles.expenseText}>
                        {incomes} TL
                    </Text>
                </View>
                <View style={styles.incomeContainer}>
                    <View style={styles.incomeTextIcon}>
                        <AntDesign name="arrowdown" size={24} color="red" />
                        <Text style={styles.expenseTypeText}>
                            Expense
                        </Text>
                    </View>
                    <Text style={styles.expenseText}>
                        {expenses} TL
                    </Text>
                </View>
            </View>
            <Text></Text>
        </View>
    )
}

export default BalanceContainer;
