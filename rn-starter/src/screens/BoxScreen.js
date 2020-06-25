import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  );
};

// (To be applied on parent element)
// Flex Alignment - (How children are laid inside parent)
// 1. alignItems - 'stretch' (Default) (Takes max horizontal space possible)
// 2. alignItems - 'flex-start' (Align child elements to left) (Takes space as the width of child element)
// 3. alignItems - 'flex-end' (Align child elements to right) (Takes space as the width of child element)
// 4. alignItems - 'center' (Align child elements to center) (Takes space as the width of child element)
// 5. alignItems - 'baseline' (Align child elements to baseline of text) (Same line as text)

// Flex Direction - (Changes direction of align items as well)
// 1. flexDirection - 'column' (Default) (Align items in horizontal direction)
// 1. flexDirection - 'column-reverse' (Align items in horizontal direction - in reverse order)
// 2. flexDirection - 'row' (Align items in vertical direction)
// 2. flexDirection - 'row-reverse' (Align items in vertical direction - in reverse order)

// Justify Content - (How children are laid inside parent)
// If flexDirection is row - justify content will work horizontally
// If flexDirection is column - justify content will work vertically
// 1. justifyContent - 'flex-start' (Default) will align children to left or top depending upon flexDirection
// 2. justifyContent - 'flex-end' will align the children to right or bottom depending upon flexDirection
// 3. justifyContent - 'center' will align the children to centre depending upon flexDirection
// 4. justifyContent - 'space-between' will add space between each child
// 5. justifyContent - 'space-around' will add space between each child as well as on top and bottom
// 6. justifyContent - 'space-evenly' will add even (equal) space between each child as well as top and bottom

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 200
  },
  textStyle: {
    borderColor: 'red',
    borderWidth: 1,
  },
});

export default BoxScreen;
