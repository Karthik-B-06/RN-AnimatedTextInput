/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import RegisterForm from './src/RegisterForm';
const AppStack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode='none'>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Register" component={RegisterForm} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};


export default App;
