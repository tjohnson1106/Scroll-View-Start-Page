import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image source={require("../images/back.jpeg")} style={styles.cart} />
        <Text style={styles.logo}>Start Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#ccc"
  },
  cart: {
    width: 40,
    height: 40
  },
  logo: {
    fontSize: 20,
    marginLeft: 10,
    fontStyle: "italic",
    color: "#292929"
  }
});

export default Header;
