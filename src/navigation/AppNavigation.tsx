import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// navigators
import TabNavigation from './TabNavigation';
import MainNavigation from './MainNavigation';
// fixtures
import {en} from '../fixtures/langs.json';
// styles
import {light} from '../fixtures/colors.json';
// types
import {RootStackParamList} from '../types/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitle: en.back,
          headerStyle: {
            backgroundColor: light.primary,
          },
          headerTintColor: light.primaryText,
        }}>
        <RootStack.Screen
          name="tabs"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="main"
          component={MainNavigation}
          options={{headerShown: true, headerTitle: en.bookDetails}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
