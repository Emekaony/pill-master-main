import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Welcome from './src/screens/Upcoming_Meds';
import Profile from './src/screens/Profile';

/*
todo:
  1. Add tab bar icons to the app
*/

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Upcoming Meds"
        component={Welcome}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            size = focused ? 25 : 20;
            return (
              <MaterialCommunityIcons name="pill" color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            size = focused ? 25 : 20;
            return <Ionicons name="person" color={color} size={size} />;
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
