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
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '7%',
    marginTop: 20,
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
  },
});

export default SearchBar;
