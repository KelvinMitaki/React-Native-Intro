import React, { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, FlatList, View } from "react-native";

const randomNumber = () => Math.floor(Math.random() * (255 - 0 + 1)) + 0;

const ColorScreen = () => {
  const [colors, setColor] = useState([]);
  const color = (
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`
      }}
    />
  );
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => setColor([color, ...colors])}
      />
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => item}
        horizontal
      />
    </View>
  );
};

export default ColorScreen;

const styles = StyleSheet.create({});
