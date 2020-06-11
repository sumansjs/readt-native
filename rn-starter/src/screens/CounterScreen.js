import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// useState is a hook
// A hook is a function which adds new functionality to function component

const CounterScreen = () => {
  // Array destructuring syntax here -
  // useState(0) - setting the initial state of counter to - 0
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // setting the new state of counter
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // setting the new state of counter
          setCounter(counter - 1);
        }}
        />
      <Text>Current Count: { counter }</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
