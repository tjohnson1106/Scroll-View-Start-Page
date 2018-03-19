import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import ImageOverlay from "./ImageOverlay";

class Banner extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/the-chest.jpeg")}
        style={styles.banner}
      >
        <ImageOverlay
          header=" - Bracket Factory - "
          paragraph=" - the app - "
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Banner;
