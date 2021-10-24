import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
import styles from './style';
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createTransaction } from '../../src/graphql/mutations';

const AddScreen = () => {


    const navigation = useNavigation();
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('expense');
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onClosePressed = () => {
        navigation.goBack();
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };
    const onPressAdd = async () => {
        try {
            const userInfo = await Auth.currentAuthenticatedUser();
            const newTrans = {
                amount: amount,
                desc: description,
                userID: userInfo.attributes.sub,
                type: type,
                createdAt: date,
            }
            await API.graphql(graphqlOperation(createTransaction, { input: newTrans }))
            navigation.goBack();
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Add Transaction</Text>
                <TouchableOpacity onPress={onClosePressed}>
                    <AntDesign name="closecircleo" size={30} color="black" />
                </TouchableOpacity>
            </View>
            {/* Description input */}
            <Text style={styles.descriptionText}>Description</Text>
            <TextInput
                style={styles.descInput}
                placeholder="Transaction Description"
                numberOfLines={1}
                value={description}
                onChangeText={setDescription}
            />
            {/* Miktar İnput */}
            <Text style={styles.descriptionText}>Amount</Text>
            <TextInput
                style={styles.descInput}
                placeholder="Transaction Amount"
                numberOfLines={1}
                keyboardType='numeric'
                value={amount.toString()}
                onChangeText={setAmount}
            />
            {/* Type picker */}
            <Text style={styles.descriptionText}>Select Type of the Transaction</Text>
            <Picker
                selectedValue={type}
                onValueChange={(itemValue, itemIndex) =>
                    setType(itemValue)
                }>
                <Picker.Item label="Expense" value="expense" />
                <Picker.Item label="Income" value="income" />
            </Picker>
            {/* Date picker */}
            <View>
                <Text style={styles.descriptionText}>Select a Date</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    style={{ marginTop: 10 }}
                />
            </View>
            {/* Ekle buton */}
            <View style={styles.button}>
                <Button
                    title='Add'
                    color='#fff'
                    onPress={onPressAdd}
                />
            </View>
        </View>
    )
}

export default AddScreen;
