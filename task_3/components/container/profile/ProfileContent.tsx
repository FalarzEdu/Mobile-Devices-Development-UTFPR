import {
  ImageSourcePropType,
  StyleSheet,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import MediaGeneric from "@/components/generic/MediaGeneric";

type ProfileContentProps = {};

export default function ProfileContent(props: ProfileContentProps) {
  return (
    <ScrollView>
      <View>
        <View style={styles.mediaRow}>
          <MediaGeneric media={require("../../../assets/images/user1.jpeg")} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mediaRow: {
    flexDirection: "row",
    width: 100,
    height: 200,
    gap: 1,
  },
});
