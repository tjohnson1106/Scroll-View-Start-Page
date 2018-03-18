import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Banner extends Component {
  render() {
    return (
      <Image
        source={require("../images/the-chest.jpeg")}
        style={styles.banner}
      />
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
