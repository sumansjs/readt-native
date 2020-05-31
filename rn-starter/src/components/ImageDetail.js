import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
  return (
  <View>
    <Image source={imageSource} />
    <Text>{title}</Text>
    <Text>Image Score - {score}</Text>
  </View>
  );
}

const style = StyleSheet.create({});
export default ImageDetail
