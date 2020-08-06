import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import zomato from '../api/zomato';
import { FlatList } from 'react-native-gesture-handler';

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

  // Don't nest FlatList inside a ScrollView
  // Use ListHeaderComponent and ListFooterComponent Props instead
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Image style={styles.image} source={{ uri: result.thumb }} />
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.name}>Average Cost For Two</Text>
            <Text>
              {result.currency} {result.average_cost_for_two}
            </Text>
            <Text style={styles.name}>Cuisines</Text>
            <Text>{result.cuisines}</Text>
            <Text style={styles.name}>Timings</Text>
            <Text>{result.timings}</Text>
            <Text style={styles.name}>Highlights - </Text>
          </>
        }
        data={result.highlights}
        keyExtractor={(it) => it}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'blue',
  },
});

export default ResultsShowScreen;
