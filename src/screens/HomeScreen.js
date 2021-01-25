import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate("Components")}>
        <Text>go to components</Text>
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
