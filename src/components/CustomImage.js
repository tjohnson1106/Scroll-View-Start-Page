import React, { Component } from "react";
import { Image, Text, View, StyleSheet } from "react-native";

import ImageOverlay from "./ImageOverlay";

class CustomImage extends Component {
  state = {};
  render() {
    return <Image source={this.props.imageSource} style={styles.image} />;
  }
}

export default CustomImage;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center"
  }
});
