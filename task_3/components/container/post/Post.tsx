import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import PostActionBar from "./PostActionBar";
import PostFooter from "./PostFooter";

type PostProps = {
  ownerId: number;
  postOwner: string;
  ownerImageURI: ImageSourcePropType;
  postImageURI: ImageSourcePropType;
  postDescription: string;
};

export default function Post(props: PostProps) {
  return (
    <View style={styles.container}>
      <PostHeader
        ownerId={props.ownerId}
        postOwner={props.postOwner}
        imageURI={props.ownerImageURI}
      />
      <Image style={styles.image} source={props.postImageURI}></Image>
      <PostActionBar />
      <PostFooter
        ownerName={props.postOwner}
        postDescription={props.postDescription}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d9d9d9",
    borderStyle: "solid",
    marginBottom: 10,
  },
  image: {
    width: "auto",
    height: 300,
    objectFit: "cover",
  },
});
