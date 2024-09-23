import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../Screens/RegistrationScreen/RegistrationScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import Home from '../Screens/Home/Home';

const MainStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            title: 'Публікації',
            headerTitleAlign: 'center',
            headerTintColor: '#212121',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 17,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
