import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import BoxScreen from './../screens/BoxScreen';
import { createStackNavigator } from '@react-navigation/stack';

const AppRouter = ({ color, onIncrease, onDecrease, navigation }) => {
    const Router = createStackNavigator();
    return (
        <>
            <Router.Screen
                name="Tài liệu"
                component={BoxScreen}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
            <Router.Screen
                name="Ký số"
                component={BoxScreen}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
            <Router.Screen
                name="Thiết bị"
                component={BoxScreen}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
            <Router.Screen
                name="Tài khoản"
                component={BoxScreen}
                options={{
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                }}
            />
        </>
    );
}

const styles = StyleSheet.create({});

export default AppRouter;
