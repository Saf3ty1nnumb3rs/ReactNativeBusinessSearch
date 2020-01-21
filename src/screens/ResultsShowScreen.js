import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, FlatList, Dimensions } from 'react-native'
import yelp from '../api/yelp'
import ResultsDetail from '../components/ResultsDetail'

const height = Dimensions.get('window').height

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    response.data.photos.shift()
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }
  return (
    <View style={styles.view}>
      <ResultsDetail result={result} detail />
      {result.photos &&
        <FlatList
          data={result.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image source={{ uri: item }} style={styles.image} />
          }}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 5,
    flex: 1,
    minHeight: height * 0.5,
    marginVertical: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15
  },
  view: {
    flex: 1,
    marginHorizontal: 15
  }
})
export default ResultsShowScreen