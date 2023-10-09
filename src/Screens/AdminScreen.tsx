import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../Theme/Color";
import { BaseButton } from "../Components";
import { useNavigation } from "@react-navigation/native";

const AdminScreen = () => {
  const navigation = useNavigation();
  const navigateToAddProduct = () => {
    navigation.navigate("AddProduct");
  };
  const navigateToAllProducts = () => {
    navigation.navigate("AllProducts");
  };
  return (
    <View style={styles.root}>
      <BaseButton type="primary" content="Create Product" onPress={navigateToAddProduct} />
      <BaseButton
        type="primary"
        content="Delete Product"
        onPress={navigateToAllProducts}
      />
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
