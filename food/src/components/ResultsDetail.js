import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsDetail;
