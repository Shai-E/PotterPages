import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
}

const ScreenContainer = ({
  backgroundColor,
  children,
}: Props): React.JSX.Element => {
  const backgroundStyle = {
    backgroundColor: backgroundColor || 'white',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

export default ScreenContainer;
