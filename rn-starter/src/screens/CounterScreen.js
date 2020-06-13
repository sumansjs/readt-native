import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// useReducer is a hook
// A hook is a function which adds new functionality to function component

const reducer = (state, action) => {
  // state - { counter : 0}
  // action - { type: 'increment' || 'decrement', payload: 1 }
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.payload };
    case 'decrement':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // Array destructuring syntax here -
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increment', payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
