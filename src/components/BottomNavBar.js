import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';

const BottomNavBar = ({ color, onIncrease, onDecrease, navigation }) => {
    return (
        <View style={{
            flex: 1,
            position: 'absolute',
            bottom: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex'
        }}>
            <View
                style={{
                    paddingLeft: '5%',
                    width: '25%'
                }}
            >
                <Icon
                    name='file'
                    type='font-awesome-5'
                    color='gray'
                    onPress={() => navigation.navigate('Tài liệu')} />
            </View>
            <View
                style={{
                    width: '25%'
                }}
            >
                <Icon
                    name='pen'
                    type='font-awesome-5'
                    color='gray'
                    onPress={() => navigation.navigate('Ký số')} />
            </View>
            <View
                style={{
                    width: '25%'
                }}
            >
                <Icon
                    name='mobile'
                    type='font-awesome-5'
                    color='gray'
                    onPress={() => navigation.navigate('Thiết bị')} />
            </View>
            <View
                style={{
                    width: '25%',
                    paddingRight: '5%'
                }}
            >
                <Icon
                    name='user'
                    type='font-awesome-5'
                    color='gray'
                    onPress={() => navigation.navigate('Tài khoản')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default BottomNavBar;
