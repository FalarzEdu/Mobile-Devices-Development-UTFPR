import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
/* FONT AWESOME SETUP */
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as faHeartSolid,
  faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";

export default function PostActionBar() {
  const [isLiked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const [isBookmarked, setBookmark] = useState(false);

  function addLike() {
    setLiked(!isLiked);
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    return;
  }

  function bookMark() {
    setBookmark(!isBookmarked);
    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.icons}>
          <Pressable onPress={addLike}>
            {isLiked ? (
              <FontAwesomeIcon icon={faHeartSolid} color="red" size={28} />
            ) : (
              <FontAwesomeIcon icon={faHeart} size={28} />
            )}
          </Pressable>
          <Text>{likes}</Text>
        </View>
        <View style={styles.icons}>
          <FontAwesomeIcon icon={faComment} size={28} />
          <Text style={styles.iconsNumber}>0</Text>
        </View>
        <FontAwesomeIcon icon={faPaperPlane} size={28} />
      </View>
      <Pressable onPress={bookMark}>
        {isBookmarked ? (
          <FontAwesomeIcon icon={faBookmarkSolid} color="blue" size={28} />
        ) : (
          <FontAwesomeIcon icon={faBookmark} size={28} />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconsNumber: {
    fontSize: 18,
  },
});
