import React from 'react';
import {StyleSheet, View} from 'react-native';
import NoContentIcon from '../assets/NoBooks.tsx';
import {widthPercentageToDP} from 'react-native-responsive-screen';

type NoContentProps = {
  listHeight: number;
};

const NoContent: React.FC<NoContentProps> = ({listHeight}) => {
  return (
    <View style={[styles.noContent, {height: listHeight}]}>
      <NoContentIcon
        width={widthPercentageToDP('90%')}
        height={widthPercentageToDP('90%')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoContent;
