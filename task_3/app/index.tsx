import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import InstaHeader from "@/components/header/InstaHeader";
import Post from "@/components/container/post/Post";

export default function Home() {
  return (
    <View>
      {/* <InstaHeader /> */}
      <ScrollView style={styles.scrollContainer}>
        <Post
          postOwner="José"
          ownerImageURI={require("../assets/images/user1.jpeg")}
          postImageURI={require("../assets/images/post1.jpeg")}
          postDescription="A beautiful photo i took o my trip to matinhos!"
          ownerId={1}
        />
        <Post
          postOwner="Isa"
          ownerImageURI={require("../assets/images/user2.jpeg")}
          postImageURI={require("../assets/images/post2.jpeg")}
          postDescription="I love this city. Pitanga S2 S2"
          ownerId={2}
        />
        <Post
          postOwner="Philip"
          ownerImageURI={require("../assets/images/user3.jpeg")}
          postImageURI={require("../assets/images/post3.jpeg")}
          postDescription="I love when my car break so i can take a cool photo of it!"
          ownerId={3}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 50,
  },
});
