import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={result.thumb ? { uri: result.thumb } : null} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.user_rating.aggregate_rating} Stars, {result.all_reviews_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
