import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import BalanceContainer from '../../components/BalanceContainer';
import Header from '../../components/Header';
import RecentTrans from '../../components/RecentTrans';
import TransactionList from '../../components/TransactionList';
import UserGreeting from '../../components/UserGreeting';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listTransactions } from '../../src/graphql/queries';

const HomeScreen = () => {

    const [userName, setUserName] = useState(null);
    const [transactions, setTransactions] = useState(null);
    const [incomes, setIncomes] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchUserData = async () => {
            const getUser = await Auth.currentAuthenticatedUser();
            setUserName(getUser.username)
        }
        fetchUserData();
    }, [])

    useEffect(() => {
        const fetchTrans = async () => {
            const transes = await API.graphql(graphqlOperation(listTransactions))
            setTransactions(transes.data.listTransactions.items)
            let expenselist = [];
            let incomelist = [];
            transes.data.listTransactions.items.forEach(e => {
                if (e.type === 'expense') {
                    expenselist.push(e.amount)
                }
                let sum = expenselist.reduce(function (a, b) { return a + b; }, 0);
                setExpenses(sum)
                if (e.type === 'income') {
                    incomelist.push(e.amount)
                }
                let sum2 = incomelist.reduce(function (a, b) { return a + b; }, 0);
                setIncomes(sum2)
                setBalance(incomes - expenses)
            });

        }
        fetchTrans();
    }, [transactions])


    return (
        <View>
            <Header />
            <UserGreeting username={userName} />
            <BalanceContainer incomes={incomes} expenses={expenses} balance={balance} transactions={transactions} />
            <RecentTrans />
            <TransactionList />
        </View>
    )
}

export default HomeScreen;
