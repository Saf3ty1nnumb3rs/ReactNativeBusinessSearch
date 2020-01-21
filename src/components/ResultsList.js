import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'
import { TouchableOpacity } from 'react-native-gesture-handler';

const height = Dimensions.get('window').height

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null
  }
  return (
    <View style={styles.container}>
      <>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                <ResultsDetail result={item} />
              </TouchableOpacity>

            )
          }}
        />
      </>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10,
    flex: 1,
    height: height * 0.26
  }
})

export default withNavigation(ResultsList)