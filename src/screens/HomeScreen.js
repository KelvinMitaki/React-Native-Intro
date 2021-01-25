import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <TouchableOpacity onPress={() => console.log("touchable opacity")}>
        <Text>go to demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
