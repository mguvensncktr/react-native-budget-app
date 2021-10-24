import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './bottomTab';
import AddScreen from '../screens/AddScreen';
import TransactionsScreen from '../screens/TransactionsScreen';

const Stack = createNativeStackNavigator();


const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Add" component={AddScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Transactions" component={TransactionsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;