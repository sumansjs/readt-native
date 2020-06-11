import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// For Buttons, we have two react-native components
// Button -> For simple button component with onPress and title props
// TouchableOpacity -> Highly customizable component to detect press on any kind of element
// For Events, we have onPress property

// Using Destructuring to select only navigation property from props

// The props system is all about communicating data from a parent to a child
// State is all about tracking the single piece of data and
// any time it changes, we want to update what is on the screen of our device

const HomeScreen = ({ navigation }) => {
  return (
  <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"
    />
    <Button
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo">
    </Button>
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo">
    </Button>
    <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo">
    </Button>
    <Button
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo">
    </Button>
    <Button
      onPress={() => navigation.navigate('Square')}
      title="Go to Square Demo">
    </Button>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
