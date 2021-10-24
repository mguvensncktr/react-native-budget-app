import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import TransactionListItem from '../TransactionListItem';
import { listTransactions } from '../../src/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';


const TransactionList = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchTrans = async () => {
            const transData = await API.graphql(graphqlOperation(listTransactions));
            setData(transData.data.listTransactions.items);
        }
        fetchTrans();
    }, [data])

    const renderSeparator = () => (
        <View
            style={{
                backgroundColor: 'lightgray',
                height: 0.8,
            }}
        />
    );
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => <TransactionListItem transaction={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    )
}

export default TransactionList
