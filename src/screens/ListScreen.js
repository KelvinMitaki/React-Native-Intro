import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
    { name: "Friend #10" },
    { name: "Friend #11" },
    { name: "Friend #12" },
    { name: "Friend #13" },
    { name: "Friend #14" },
    { name: "Friend #15" },
    { name: "Friend #16" },
    { name: "Friend #17" },
    { name: "Friend #18" },
    { name: "Friend #19" },
    { name: "Friend #20" }
  ];
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
