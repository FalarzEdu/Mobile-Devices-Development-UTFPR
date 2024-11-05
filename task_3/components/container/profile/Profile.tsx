import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileContent from "./ProfileContent";
import ProfileHeader from "./ProfileHeader";

type ProfileProps = {
  ownerImage: ImageSourcePropType;
};

export default function Profile(props: ProfileProps) {
  return (
    <View>
      <ProfileHeader ownerImage={props.ownerImage} />
      <ProfileContent />
    </View>
  );
}

const styles = StyleSheet.create({});
