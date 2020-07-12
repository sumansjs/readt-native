import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

const ResultsList = ({ results, title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.restaurant.id}
        renderItem={({ item }) => {
          return <Text>{item.restaurant.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: 'bold' },
});

export default ResultsList;
