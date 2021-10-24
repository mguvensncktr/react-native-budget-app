import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import { Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: '#fff',
            tabBarShowLabel: false
        }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{ tabBarIcon: ({ color }) => (<Entypo name="home" size={30} color={color} />) }}
            />
            <Tab.Screen name="Add" component={AddScreen}
                options={{ tabBarIcon: ({ color }) => (<MaterialIcons name="add-circle-outline" size={35} color={color} />) }}
            />
            <Tab.Screen name="Transactions" component={TransactionsScreen}
                options={{ tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="format-list-bulleted" size={30} color={color} />) }}

            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;