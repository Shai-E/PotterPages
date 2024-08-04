import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
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
  const DynamicView = isScrollable ? View : SafeAreaView;

  return (
    <DynamicView style={[styles.container, {backgroundColor}]}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarColor} />
      {children}
    </DynamicView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenContainer;
