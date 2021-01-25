import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(c => c + 1)}
      >
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setCount(c => c - 1)}
      >
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text>Current Count:</Text>
      <Text>{count}</Text>
    </View>
  );
};

export default CounterScreen;

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
