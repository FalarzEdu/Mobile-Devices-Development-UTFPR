import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import React from "react";
import { useRouter, Router } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

type PostHeaderProps = {
  ownerId: number;
  postOwner: string;
  imageURI: ImageSourcePropType;
};

export default function PostHeader(props: PostHeaderProps) {
  const ROUTER: Router = useRouter();

  const navigateToProfile = (): void => {
    ROUTER.push({
      pathname: "/profile/userProfile",
      params: { ownerId: props.ownerId },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.ownerIdentification}>
        <Pressable onPress={navigateToProfile}>
          <Image source={props.imageURI} style={styles.image} />
        </Pressable>
        <Text style={styles.ownerName}>{props.postOwner}</Text>
      </View>
      <FontAwesomeIcon icon={faEllipsisVertical} size={22} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  ownerIdentification: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  ownerName: {
    fontSize: 16,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 25,
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
  },
});
