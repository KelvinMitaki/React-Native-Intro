import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ title, imageUrl, score }) => {
  return (
    <View>
      <Image source={imageUrl} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
