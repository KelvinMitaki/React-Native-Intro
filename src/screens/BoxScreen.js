import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={{ ...styles.textStyle, flex: 4 }}>Child #1</Text>
      <Text style={{ ...styles.textStyle, flex: 4 }}>Child #2</Text>
      <Text style={{ ...styles.textStyle, flex: 2, alignSelf: "flex-end" }}>
        Child #3
      </Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    flexDirection: "row",
    height: 200,
    justifyContent: "space-between",
    alignItems: "center"
  },
  textStyle: {
    borderWidth: 2,
    borderColor: "red"
  }
});
