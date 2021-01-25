import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 11 },
    { name: "Friend #2", age: 12 },
    { name: "Friend #3", age: 13 },
    { name: "Friend #4", age: 14 },
    { name: "Friend #5", age: 15 },
    { name: "Friend #6", age: 16 },
    { name: "Friend #7", age: 17 },
    { name: "Friend #8", age: 18 },
    { name: "Friend #9", age: 19 },
    { name: "Friend #10", age: 10 },
    { name: "Friend #11", age: 11 },
    { name: "Friend #12", age: 12 },
    { name: "Friend #13", age: 13 },
    { name: "Friend #14", age: 14 },
    { name: "Friend #15", age: 15 },
    { name: "Friend #16", age: 16 },
    { name: "Friend #17", age: 17 },
    { name: "Friend #18", age: 18 },
    { name: "Friend #19", age: 19 },
    { name: "Friend #20", age: 20 }
  ];
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.text}>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  text: {
    marginVertical: 15
  }
});
