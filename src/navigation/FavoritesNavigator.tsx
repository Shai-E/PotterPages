import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetailScreen from '../screens/BookDetailScreen';
import {FavoritesStackParamList} from './types';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createNativeStackNavigator<FavoritesStackParamList>();

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Stack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default FavoritesNavigator;
