import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
// styles
import {useColors} from '../hooks/useColors';

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
  backgroundColor,
  statusBarColor,
  statusBarStyle = 'light-content',
}: ScreenContainerProps): React.JSX.Element => {
  const colors = useColors();
  const DynamicView = isScrollable ? View : SafeAreaView;

  return (
    <DynamicView
      style={[
        styles.container,
        {backgroundColor: backgroundColor || colors.primary},
      ]}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarColor || colors.primary}
      />
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
