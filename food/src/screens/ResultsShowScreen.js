import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import zomato from '../api/zomato';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  console.log(result);

  const getResults = async (id) => {
    const response = await zomato.get(`/restaurant?res_id=${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResults(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Image style={styles.image} source={{ uri: result.thumb }} />
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
});

export default ResultsShowScreen;
