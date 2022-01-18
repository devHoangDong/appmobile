import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

function BottomNavbar({ navigation }) {
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
      {/* <Text>Home screen</Text> */}
      {/* <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      /> */}
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
          onPress={() => navigation.navigate('Profile')} />
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
          onPress={() => navigation.navigate('Profile')} />
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
          onPress={() => navigation.navigate('Profile')} />
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
          onPress={() => navigation.navigate('Profile')} />
      </View>
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trang chủ"
        component={BottomNavbar}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
