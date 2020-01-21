import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.view}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.input}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F0EEEE',
    marginTop: 10,
    borderRadius: 5,
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 38,
    alignSelf: 'center',
    marginHorizontal: 12
  }
})

export default SearchBar
