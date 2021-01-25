import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>text from ComponentsScreen</Text>
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});
