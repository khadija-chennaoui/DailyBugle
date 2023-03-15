import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Saved from '../screens/Saved';
import NewsOverview from '../screens/NewsOverview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen options={{
        tabBarIcon(props) {
          return (
            <Icon
              size={30}
              name={props.focused ? "home-circle" : "home-circle-outline"}
              style={{ color: '#604859' }}
            />
          )
        }
      }}
        name="Home"
        component={Home}
      />
      <Tab.Screen options={{
        tabBarIcon(props) {
          return (
            <Icon
              size={30}
              name={props.focused ? "content-save-move" : "content-save-move-outline"}
              style={{ color: '#604859' }}
            />
          )
        }
      }}
        name="Saved"
        component={Saved}
      />
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