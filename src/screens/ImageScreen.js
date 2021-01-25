import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        imageUrl={require("../../assets/forest.jpg")}
        title="forest"
      />
      <ImageDetail imageUrl={require("../../assets/beach.jpg")} title="beach" />
      <ImageDetail
        imageUrl={require("../../assets/mountain.jpg")}
        title="mountain"
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
