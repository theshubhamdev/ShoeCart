import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../Theme/Color";
import { BaseButton } from "../Components";
import { useNavigation } from "@react-navigation/native";
import { traceCallback } from "../Utils";

const HomeScreen = () => {
  const navigation = useNavigation();
  const navigateToAdmin = () => {
    navigation.navigate("Admin");
  };
  const navigateToCustomer = () => {
    navigation.navigate("Customer");
  };
  return (
    <View style={styles.root}>
      <BaseButton type="primary" content="Admin" onPress={navigateToAdmin} />
      <BaseButton
        type="primary"
        content="Customer"
        onPress={navigateToCustomer}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
