import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import HomePageIcon from "../components/HomePage";
import { Color } from "../GlobalStyles";

const Union = () => {
  return (
    <View style={styles.union}>
      <HomePageIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  union: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 1024,
  },
});

export default Union;
