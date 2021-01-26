import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ColorCounter = ({ color, setColor, colorValue }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        onPress={() => colorValue + 15 < 255 && setColor(c => c + 15)}
        title={`Increase ${color}`}
      />
      <Button
        onPress={() => colorValue - 15 > 0 && setColor(c => c - 15)}
        title={`Decrease ${color}`}
      />
    </View>
  );
};

export default ColorCounter;

const styles = StyleSheet.create({});
