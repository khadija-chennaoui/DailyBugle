import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../components/Home';
import Saved from '../components/Saved';
import NewsOverview from '../components/NewsOverview';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewsOverview" component={NewsOverview} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default AppNavigator;