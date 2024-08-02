import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
// styles
import {light} from '../fixtures/colors.json';

type BarStyle = 'light-content' | 'dark-content';

type ScreenContainerProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  statusBarColor?: string;
  isScrollable?: boolean;
  statusBarStyle?: BarStyle;
};

const ScreenContainer = ({
  children,
  isScrollable,
  backgroundColor = light.primary,
  statusBarColor = light.primary,
  statusBarStyle = 'light-content',
}: ScreenContainerProps): React.JSX.Element => {
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
