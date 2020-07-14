import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ results, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.restaurant.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item.restaurant} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
