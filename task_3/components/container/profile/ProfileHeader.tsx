import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { DEFAULT_PADDING } from "@/constants/Styles";

type ProfileHeaderProps = {
  ownerImage: ImageSourcePropType;
};

export default function ProfileHeader(props: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View>
        <Image source={props.ownerImage} style={styles.image} />
      </View>
      <View style={styles.userInfo}>
        <View style={styles.userInfoDetails}>
          <Text>1</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.userInfoDetails}>
          <Text>169</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.userInfoDetails}>
          <Text>364</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 30,
    padding: DEFAULT_PADDING,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
  },
  userInfo: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    gap: 30,
  },
  userInfoDetails: {
    alignItems: "center",
  },
});
