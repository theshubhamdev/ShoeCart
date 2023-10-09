import { Alert, FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSliceValue } from "../../Store/Cart";
import CartListItem from "./CartListItem";
import BaseButton from "../BaseButton";
import { selectTotalPrice } from "../../Store/Cart/index.selectors";
import { clearCartAndUpdateProducts } from "../../Store/Cart/index.actions";
import { AppDispatch } from "../../Store";

const CartList = () => {
  const cartItems = useSelector(cartSliceValue);

  const totalCost = useSelector(selectTotalPrice);
  const dispatch = useDispatch<AppDispatch>();
  const proceedToPay = async () => {
    await dispatch(clearCartAndUpdateProducts());
    Alert.alert("Your Payment was successfull");
  };
  return (
    <FlatList
      data={cartItems.items}
      renderItem={({ item }) => <CartListItem item={item} />}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() =>
        totalCost > 0 ? (
          <BaseButton
            type="primary"
            content={`Pay Rs.${totalCost}`}
            onPress={proceedToPay}
          />
        ) : null
      }
    />
  );
};

export default CartList;