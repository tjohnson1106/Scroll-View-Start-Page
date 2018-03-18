import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import CustomImage from "./CustomImage";

class ContentContainer extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.colTwo}>
          <CustomImage imageSource={require("../images/lake.jpeg")} />
        </View>

        <View style={styles.colOne}>
          <CustomImage imageSource={require("../images/water.jpeg")} />
        </View>

        <View style={styles.contentBanner}>{}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5
  },
  colOne: {
    flex: 1,
    padding: 5
  },
  colTwo: {
    flex: 2,
    padding: 5
  },
  contentBanner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  }
});

export default ContentContainer;
