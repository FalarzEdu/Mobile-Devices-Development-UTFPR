import {
  Image,
  ImageProps,
  ImageSourcePropType,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  Touchable,
  View,
} from "react-native";
import React from "react";

type ImageButtonProps = {
  imagePath: ImageSourcePropType;
  heigth: number;
  width: number;
} & PressableProps;

export default function ImageButton({
  imagePath,
  heigth,
  width,
  ...rest
}: ImageButtonProps) {
  return (
    <View>
      <Pressable style={styles.button} {...rest}>
        <Image
          style={[styles.image, { height: heigth, width: width }]}
          source={imagePath}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {},
  image: {
    objectFit: "contain",
  },
});
