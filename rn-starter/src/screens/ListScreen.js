import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

// Primitive Element -> FlatList
const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 25 },
    { name: 'Friend #4', age: 22 },
    { name: 'Friend #5', age: 26 },
    { name: 'Friend #6', age: 30 },
    { name: 'Friend #7', age: 32 },
    { name: 'Friend #8', age: 36 },
    { name: 'Friend #9', age: 28 },
  ]

  // keyExtractor -> Adding key to list to uniquely identify list
  return (
  <FlatList
    // horizontal
    // showsHorizontalScrollIndicator = {false}
    keyExtractor={(friend) => friend.name}
    data={friends}
    renderItem={({ item }) => {
      // element === {item: { name: 'Friend #1' }, index: 0}
      // item === {name: 'Friend #1' }
      return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
    }}
  />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
