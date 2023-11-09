import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './src/screens/Welcome';

/*
todo:
  1. Refactor this whole codebase and put everything into its respective screen
  2. Add react navigation to the app and use it for dummy screens
  3. Have a screen where people cal schedule medication (shouldn't that come from the pill master/server?)
  4. Refactor the styling too so we have consistent coloring allthrough the app.
*/

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Welcome />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
