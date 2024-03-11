import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Employee from '../screens/Employee';
import Guest from '../screens/Guest';

export default function Router() {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Employee" component={Employee} />
      <Stack.Screen name="Guest" component={Guest} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})