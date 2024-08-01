import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetailScreen from '../screens/BookDetailScreen';
import {FavoritesStackParamList} from './types';
import FavoritesScreen from '../screens/FavoritesScreen';
import {light} from '../fixtures/colors.json';

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesNavigator = () => {
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
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{title: 'Favorites'}}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{headerShown: true, title: 'Book Details'}}
      />
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;
