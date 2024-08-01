import React from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  StyleSheet,
} from 'react-native';
import SearchIcon from '../assets/Search.tsx';
import {light} from '../fixtures/colors.json';
import {heightPercentageToDP} from 'react-native-responsive-screen';

type SearchBarProps = {
  searchKey: string;
  setSearchKey: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({searchKey, setSearchKey}) => {
  const dynamicStyles = () => ({
    color: searchKey.length > 0 ? 'blue' : light.tertiary,
    marginHorizontal: 10,
  });

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchInputContainer}>
        <SearchIcon style={dynamicStyles()} />
        <TextInput
          placeholder="Search Books"
          style={styles.searchInput}
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setSearchKey(e.nativeEvent.text)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    height: heightPercentageToDP('7%'),
    justifyContent: 'flex-end',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: heightPercentageToDP('6%'),
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    borderEndEndRadius: 10,
    paddingHorizontal: 10,
    borderStartWidth: 1,
    borderColor: '#ccc',
    color: light.tertiary,
  },
});

export default SearchBar;
