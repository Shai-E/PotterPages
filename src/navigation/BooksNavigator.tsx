import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BooksScreen from '../screens/BooksScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import {BooksStackParamList} from './types';
import {light} from '../fixtures/colors.json';

const Stack = createNativeStackNavigator<BooksStackParamList>();

const BooksNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitle: 'Back',
        // headerBackTitleStyle: {fontSize: 16},
        headerStyle: {
          backgroundColor: light.primary,
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="BooksScreen"
        component={BooksScreen}
        options={{title: 'Potter Pages'}}
      />

      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{headerShown: true, title: 'Book Details'}}
      />
    </Stack.Navigator>
  );
};

export default BooksNavigator;
