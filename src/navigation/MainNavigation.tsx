import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookDetailScreen from '../screens/BookDetailScreen';
import {light} from '../fixtures/colors.json';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitle: 'Back',
        headerStyle: {
          backgroundColor: light.primary,
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="details"
        component={BookDetailScreen}
        options={{headerShown: false, title: 'Book Details'}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
