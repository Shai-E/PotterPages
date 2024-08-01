import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BooksScreen from '../screens/BooksScreen';
import BookDetailScreen from '../screens/BookDetailScreen';
import {BooksStackParamList} from './types';

const Stack = createNativeStackNavigator<BooksStackParamList>();

const BooksNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BooksScreen" component={BooksScreen} />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default BooksNavigator;
