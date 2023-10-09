import { View } from "react-native";
import React from "react";
import { CartList } from "../Components/Cart";
import colors from "../Theme/Color";

const CartScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <CartList />
    </View>
  );
};

export default CartScreen;