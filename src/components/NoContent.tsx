import React from 'react';
import {StyleSheet, View} from 'react-native';
// styles
import NoContentIcon from '../assets/NoBooks.tsx';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

type NoContentProps = {
  listHeight: number;
};

const NoContent: React.FC<NoContentProps> = ({listHeight}) => {
  return (
    <View style={[styles.noContent, {height: listHeight}]}>
      <NoContentIcon width={wp('90%')} height={wp('90%')} />
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
