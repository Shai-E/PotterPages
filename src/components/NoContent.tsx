import React from 'react';
import {StyleSheet, View} from 'react-native';
// styles
import NoContentIcon from '../assets/NoBooks.tsx';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const NoContent: React.FC = () => {
  return (
    <View style={styles.noContent}>
      <NoContentIcon width={wp('90%')} height={wp('90%')} />
    </View>
  );
};

const styles = StyleSheet.create({
  noContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoContent;
