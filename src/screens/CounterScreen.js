import React, { useReducer, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_counter":
      return { ...state, counter: state.counter + action.payload };
    case "decrease_counter":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "increase_counter", payload: 1 })}
      >
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "decrease_counter", payload: 1 })}
      >
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text>Current Count:</Text>
      <Text>{state.counter}</Text>
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
