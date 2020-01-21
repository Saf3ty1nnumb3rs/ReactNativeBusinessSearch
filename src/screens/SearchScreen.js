import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

import useSearch from '../hooks/useSearch'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, error, searchApi] = useSearch()

  const filterResultsByPrice = (price) => {
    return results.filter(result => result.price === price)
  }

  useEffect(() => {
    return setTerm('')
  }, [])
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error && results.length === 0 ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultsList title="Cheap Eats" results={filterResultsByPrice('$')} />
        <ResultsList title="Middle Of The Road" results={filterResultsByPrice('$$')} />
        <ResultsList title="Treat Yo' Self" results={filterResultsByPrice('$$$')} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default SearchScreen
