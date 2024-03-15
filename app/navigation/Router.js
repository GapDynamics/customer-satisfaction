import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Employee from '../screens/Employee';
import Guest from '../screens/Guest';
import Feedback from '../screens/Feedback';
import Ratings from '../screens/Ratings';
import Splash from '../screens/Splash';
import Language from './Language';
import Letsgo from '../screens/Letsgo';
import Test from '../screens/Test';

export default function Router() {
  const Stack = createNativeStackNavigator();
  const AuthNavigator = createNativeStackNavigator();

  function AuthScreen() {
    return (
      <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Employee" component={Employee} />
        <Stack.Screen name="Guest" component={Guest} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Ratings" component={Ratings} />
        <Stack.Screen name="Letsgo" component={Letsgo} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    )
  }

  function AuthNavigation() {
    return (
      <AuthNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <AuthNavigator.Screen name="Login" component={Login} />
        {/* <AuthNavigator.Screen name="Employee" component={Employee} /> */}
        <AuthNavigator.Screen name="Guest" component={Guest} />
        <AuthNavigator.Screen name="Feedback" component={Feedback} />
        <AuthNavigator.Screen name="Ratings" component={Ratings} />
        <AuthNavigator.Screen name="Splash" component={Splash} />
        <AuthNavigator.Screen name="Notes" component={Notes} />
      </AuthNavigator.Navigator>
    );
  }

  const HandleNavigation = createNativeStackNavigator();
  function HandleNavigationContainer() {
    return (
      <HandleNavigation.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <HandleNavigation.Screen name="Splash" component={Splash} /> */}
        <HandleNavigation.Screen name="AuthScreen" component={AuthScreen} />
      </HandleNavigation.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <HandleNavigationContainer />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
