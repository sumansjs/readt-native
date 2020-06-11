import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

let counter = 0;

const CounterScreen = () => {
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          counter++;
          console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          counter--;
          console.log(counter);
        }}
        />
      <Text>Current Count:</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
