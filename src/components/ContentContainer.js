import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo";

import CustomImage from "./CustomImage";

class ContentContainer extends Component {
  render() {
    return (
      <LinearGradient colors={["#3d72b4", "#3d72b4"]}>
        <View style={styles.contentContainer}>
          <View style={styles.colTwo}>
            <CustomImage imageSource={require("../images/lake.jpeg")} header="video" />
          </View>

          <View style={styles.colOne}>
            <CustomImage imageSource={require("../images/water.jpeg")} />
          </View>

          <View style={styles.contentBanner}>
            <CustomImage imageSource={require("../images/glass-house.jpeg")} />
          </View>

          <View style={styles.colOne}>
            <CustomImage imageSource={require("../images/bed.jpeg")} />
          </View>

          <View style={styles.colTwo}>
            <CustomImage imageSource={require("../images/clock.jpeg")} />
          </View>
        </View>
      </LinearGradient>
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
