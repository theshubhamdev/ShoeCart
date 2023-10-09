import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RemoveProductCardList from "../Components/Product/RemoveProductCardList";
import colors from "../Theme/Color";

const AllProductsScreen = () => {
  return (
    <View style={styles.root}>
      <RemoveProductCardList />
    </View>
  );
};

export default AllProductsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
