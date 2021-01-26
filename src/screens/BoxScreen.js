import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={{ ...styles.textStyle, flex: 1 }}>Child #1</Text>
      <Text
        style={{
          ...styles.textStyle,
          flex: 1,
          marginHorizontal: 10,
          top: 20
        }}
      >
        Child #2
      </Text>
      <Text style={{ ...styles.textStyle, flex: 1 }}>Child #3</Text>
    </View>
  );
};

export default BoxScreen;

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "flex-start",
    height: 200
  },
  textStyle: {
    borderWidth: 2,
    borderColor: "red"
  }
});
