import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

// 1.) Box Object Model
// Height, Width, Margin, Border, Padding


// 2.) Flex Box

// (To be applied on parent element)
// Flex Alignment - (How children are laid inside parent)
// 1. alignItems - 'stretch' (Default) (Takes max horizontal space possible)
// 2. alignItems - 'flex-start' - Align child elements to left (Takes space as the width of child element)
// 3. alignItems - 'flex-end' - Align child elements to right (Takes space as the width of child element)
// 4. alignItems - 'center' - Align child elements to center (Takes space as the width of child element)
// 5. alignItems - 'baseline' - Align child elements to baseline of text (Same line as text)

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


// (To be applied on child element)
// Flex - (How much space child is going to take inside parent)
// Space taken by child is calculated in percentage (proportion)
// It is calculated as - ((flex value of child)*100)/(sum of all flex value of children)
// Even for the zero percentage, child will not disappear. It will take the minimum space as its height or width
// If no flex value are there for child, available space is equally shared among children

// alignSelf - (Will override the alignItems property of parent)
// Default value is same as the alignItems value of parent element
// 1. alignSelf - 'auto' - Set the alignment same as that of parent element
// 2. alignSelf - 'stretch' - Takes max horizontal space possible
// 3. alignSelf - 'flex-start' - Align child element to left (Takes space as the width of child element)
// 4. alignSelf - 'flex-end' - Align child element to right (Takes space as the width of child element)
// 5. alignSelf - 'center' - Align child element to center (Takes space as the width of child element)
// 6. alignSelf - 'baseline' - Align child element to baseline of text (Same line as text)


// 3.) Position - (How single element gets laid out inside parent element)

// Use this to override Object Model + Flex box
// 1. position - 'relative' (Default)
// 2. position - 'absolute' - Ignored by siblings, though some flex box rules are set by parent

// Under Position there are four different related properties (top, bottom, left, right)
// It feels like margin but behave differently
// 1. top - Extra space added at top after displaying everything
// 2. bottom - Extra space added at bottom after displaying everything
// 3. left - Extra space added at left after displaying everything
// 4. right - Extra space added at right after displaying everything

// For absolute filling the child element to the entire size of parent element,
// We can use - position:'absolute', top:0, bottom:0, right:0, left:0
// There is shortcut for this - ...StyleSheet.absoluteFillObject

// Flowchart for using layouts
// Apply Box Model Rules
// Is Position Absolute ?
// No -
// Apply all flex box rules, considering children
// Place element inside parent
// Apply top, left, right, bottom
// Yes -
// Apply flex box rules, ignore all siblings
// Apply top, left, right, bottom

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    height: 200
  },
  textOneStyle: {
    borderColor: 'red',
    borderWidth: 1,
    flex:1
  },
  textTwoStyle: {
    borderColor: 'red',
    borderWidth: 1,
    flex:2,
    alignSelf: 'center',
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderColor: 'red',
    borderWidth: 1,
    flex:3
  },
  parentStyle: {
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: '#F2D7D5'
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: '#ABEBC6',
    // marginTop: 100,
    // top: 100,
    alignSelf: 'flex-end'
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: '#D7BDE2'
  }
});

export default BoxScreen;
