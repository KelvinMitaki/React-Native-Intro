import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  const text = "my name is kevin";
  return (
    <View>
      <Text style={styles.textStyle}>getting started with react native</Text>
      <Text style={styles.name}>{text}</Text>
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  name: {
    fontSize: 20
  }
});
