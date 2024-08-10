import React from 'react';
// navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screens
import BooksScreen from '../screens/BooksScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../services/localization/keys';
// styles
import BookmarkIcon from '../assets/Bookmark';
import BookIcon, {CustomSvgProps} from '../assets/Book';
import {useColors} from '../hooks/useColors';
// types
import {ScreenNames, TabsParamList} from '../types/navigation';
import {ColorTheme} from '../assets/colors/colors';

const TabIcon = ({
  focused,
  colors,
  Icon,
}: {
  focused: boolean;
  colors: ColorTheme;
  Icon: React.FC<CustomSvgProps>;
}) => (
  <Icon
    width={20}
    height={20}
    color={focused ? colors.primaryText : colors.placeholder}
  />
);
const Tab = createBottomTabNavigator<TabsParamList>();

const TabNavigation = () => {
  const {t} = useTranslation();
  const colors = useColors();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins',
        },
        tabBarActiveTintColor: colors.primaryText,
        tabBarInactiveTintColor: colors.placeholder,
      }}>
      <Tab.Screen
        name={ScreenNames.BOOKS}
        component={BooksScreen}
        options={{
          title: t(TranslationKeys.books),
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.primaryText,
          headerTitleAlign: 'center',
          headerTitle: t(TranslationKeys.potterPages),
          tabBarIcon: ({focused}) => TabIcon({focused, colors, Icon: BookIcon}),
        }}
      />
      <Tab.Screen
        name={ScreenNames.FAVORITES}
        component={FavoritesScreen}
        options={{
          title: t(TranslationKeys.favorites),
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.primaryText,
          headerTitleAlign: 'center',
          headerTitle: t(TranslationKeys.favorites),
          tabBarIcon: ({focused}) =>
            TabIcon({focused, colors, Icon: BookmarkIcon}),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
