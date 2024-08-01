import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './MainNavigation';
import {light} from '../fixtures/colors.json';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import TabNavigation from './TabNavigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: light.primary,
          },
          headerTintColor: 'white',
        }}>
        <RootStack.Screen
          name="tabs"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="main"
          component={MainNavigation}
          options={{headerShown: true, headerTitle: 'Book Details'}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
