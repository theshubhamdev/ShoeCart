import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../Theme/Color";
import { ProductList } from "../Components/Product";

const CustomerScreen = () => {
  return (
    <View style={{ backgroundColor: colors.background }}>
      <ProductList />
    </View>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({});
