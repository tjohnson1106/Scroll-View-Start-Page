import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";

import ImageOverlay from "./ImageOverlay";

class CustomImage extends Component {
  state = {};
  render() {
    return (
      <ImageBackground source={this.props.imageSource} style={styles.image}>
        <ImageOverlay
          header={this.props.header}
          paragraph={this.props.paragraph}
        />
      </ImageBackground>
    );
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
