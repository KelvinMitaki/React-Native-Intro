import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [input, setInput] = useState("");
  return (
    <View>
      <Text>ENTER PASSWORD:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => setInput(text)}
        value={input}
      />
      {input.trim().length < 5 && (
        <Text>password must be longer than five characters</Text>
      )}
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    height: 40
  }
});
