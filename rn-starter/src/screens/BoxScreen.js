import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'black',
    borderWidth: 1,
  },
  textStyle: {
    borderColor: 'red',
    borderWidth: 1,
    margin: 20,
  },
});

export default BoxScreen;
