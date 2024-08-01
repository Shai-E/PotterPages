import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BooksNavigator from './BooksNavigator';
import {RootTabParamList} from './types';
import FavoritesNavigator from './FavoritesNavigator';
import BookmarkIcon from '../assets/Bookmark';
import BookIcon from '../assets/Book';
import {light} from '../fixtures/colors.json';

const Tab = createBottomTabNavigator<RootTabParamList>();

const bookTabIcon = ({focused}: {focused: boolean}) => (
  <BookIcon width={20} height={20} color={focused ? 'white' : 'gray'} />
);

const bookmarkTabIcon = ({focused}: {focused: boolean}) => (
  <BookmarkIcon width={20} height={20} color={focused ? 'white' : 'gray'} />
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: light.primary,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            color: 'white',
          },
        }}>
        <Tab.Screen
          name="Books"
          component={BooksNavigator}
          options={{
            headerShown: false,
            tabBarIcon: bookTabIcon,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesNavigator}
          options={{
            headerShown: false,
            tabBarIcon: bookmarkTabIcon,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
