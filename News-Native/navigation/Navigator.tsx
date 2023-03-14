import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Saved from '../screens/Saved';
import NewsOverview from '../screens/NewsOverview';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewsOverview" component={NewsOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;