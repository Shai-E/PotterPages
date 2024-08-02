import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {light} from '../fixtures/colors.json';
interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
  statusBarColor?: string;
  isScrollable?: boolean;
  statusBarStyle?: 'light-content' | 'dark-content';
}

const ScreenContainer = ({
  children,
  isScrollable,
  backgroundColor = light.primary,
  statusBarColor = light.primary,
  statusBarStyle = 'light-content',
}: Props): React.JSX.Element => {
  const backgroundStyle = {
    backgroundColor: backgroundColor,
    flex: 1,
  };

  if (isScrollable) {
    return (
      <View style={backgroundStyle}>
        <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarColor} />
        {children}
      </View>
    );
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarColor} />
      {children}
    </SafeAreaView>
  );
};

export default ScreenContainer;
