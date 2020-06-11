import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;


const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +15, -15
    switch (color) {
      case 'red':
        (color + change > 255 || color + change < 0) ? null : setRed(red + change);
        break;
      case 'green':
        (color + change > 255 || color + change < 0) ? null : setGreen(green + change);
        break;
      case 'blue':
        (color + change > 255 || color + change < 0) ? null : setBlue(blue + change);
        break;
      default:
        break;
    }
  }

  return(
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} />
      <ColorCounter
        color="green"
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}/>
      <ColorCounter
        color="blue"
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', - 1 * COLOR_INCREMENT)}/>
      <View
        style={{height: 100, width: 100, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
export default SquareScreen;
