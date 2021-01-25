import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const ImageDetail = ({ title, imageUrl }) => {
  return (
    <View>
      <Image source={imageUrl} />
      <Text>{title}</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
