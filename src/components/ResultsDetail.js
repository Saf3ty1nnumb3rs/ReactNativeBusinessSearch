import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Linking } from 'expo'
import { FontAwesome } from '@expo/vector-icons'
const height = Dimensions.get('window').height

const ResultsDetail = ({ result, detail, }) => {
  const view = detail ? ({
    image: styles.image2,
    screen: styles.container2,
    name: result.name
  }) : ({
    image: styles.image,
    screen: styles.container,
    name: result.name.length > 26 ? `${result.name.substring(0, 25)}...` : result.name
  })
  return (
    <View style={view.screen}>
      <Image source={{ uri: result.image_url }} style={view.image} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', maxWidth: '100%' }}>
        <Text style={styles.name}>{view.name}</Text>
      </View>
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
      {detail && (
        <>
          <Text>{result.location.display_address[0]}</Text>
          <Text>{result.location.display_address[1]}</Text>
          <Text>Phone: {result.display_phone}</Text>
          <TouchableOpacity style={styles.view} onPress={() => {
            Linking.openURL(result.url)
          }}>
            <FontAwesome name="yelp" style={styles.link} />
            <Text style={styles.link}>On Yelp!</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F0EEEE',
    marginVertical: 10,
    borderRadius: 5,
    height: 30,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    borderRadius: 5,
    height: height * 0.18,
    width: 250,
    marginBottom: 5
  },
  image2: {
    borderRadius: 5,
    flex: 1,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15
  },
  container: {
    marginLeft: 15,
    height: height * 0.26
  },
  container2: {
    height: height * 0.38,
    borderColor: 'gray',
    marginVertical: 15
  },
  link: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'blue'
  }
})

export default ResultsDetail;