import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(`rgb(${red}, ${green}, ${blue})`);
  return (
    <View>
      <ColorCounter colorValue={red} color="Red" setColor={setRed} />
      <ColorCounter colorValue={green} color="Green" setColor={setGreen} />
      <ColorCounter colorValue={blue} color="Blue" setColor={setBlue} />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginTop: 20
        }}
      ></View>
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
