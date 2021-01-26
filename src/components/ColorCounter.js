import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorCounter = ({ color, setColor, colorValue }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => colorValue < 255 && setColor(c => c + 5)}
        title={`Increase ${color}`}
      />
      <Button
        onPress={() => colorValue > 0 && setColor(c => c - 5)}
        title={`Decrease ${color}`}
      />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
