import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Components")}
      >
        <Text>go to components</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("List")}
      >
        <Text>go to list</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Image")}
      >
        <Text>go to image</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Count")}
      >
        <Text>go to Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Color")}
      >
        <Text>go to Color Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Square")}
      >
        <Text>go to Square Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    backgroundColor: "#00a2ff",
    padding: 5,
    marginTop: 15,
    width: 200
  }
});

export default HomeScreen;
