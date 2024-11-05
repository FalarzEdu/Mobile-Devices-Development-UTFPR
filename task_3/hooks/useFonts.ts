import { useEffect, useState } from "react";
import * as Font from "expo-font";

export default function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        InstagramFont: require("../assets/fonts/Instagram-font.otf"),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  return fontsLoaded;
}
