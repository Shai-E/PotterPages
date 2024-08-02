import React from 'react';
// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import BookDetailScreen from '../screens/BookDetailScreen';
// fixtures
import {en} from '../fixtures/langs.json';
// styles
import {light} from '../fixtures/colors.json';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitle: en.back,
        headerStyle: {
          backgroundColor: light.primary,
        },
        headerTintColor: light.primaryText,
      }}>
      <Stack.Screen
        name="details"
        component={BookDetailScreen}
        options={{headerShown: false, title: en.bookDetails}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
