import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        imageUrl={require("../../assets/forest.jpg")}
        score={7}
        title="forest"
      />
      <ImageDetail
        imageUrl={require("../../assets/beach.jpg")}
        score={8}
        title="beach"
      />
      <ImageDetail
        imageUrl={require("../../assets/mountain.jpg")}
        score={9}
        title="mountain"
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
