import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import React from "react";

type MediaGenericProps = {
  media: ImageSourcePropType;
};

export default function MediaGeneric(props: MediaGenericProps) {
  return (
    <View style={styles.imagePack}>
      <Image style={styles.singleImage} source={props.media} />
    </View>
  );
}

const styles = StyleSheet.create({
  imagePack: {
    flexDirection: "row",
    width: "100%", // Takes up full screen width
    height: 50,
  },
  singleImage: {
    width: "33.33%", // Divides equally among 3 images
    height: "100%",
    objectFit: "cover",
  },
});
