import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { CartItem } from "../../Store/Cart/index.types";
import colors from "../../Theme/Color";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../Store/Cart";
import BaseChip from "../BaseChip";
import { productsSliceValue } from "../../Store/Products";

const CartListItem: FC<{ item: CartItem }> = ({ item }) => {
  const {data} = useSelector(productsSliceValue)
  const foundItem = data.find((v) => v.id === item.productId);

  const optionData = data[0].options.find((v) => v.id === item.optionId);
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeFromCart(item.optionId));
  };

  const increaseItemQuantity = () => {
    if (optionData && (Number(optionData.availableQty) < item.quantity)) {
      dispatch(incrementQuantity(item.optionId));
    } else {
      Alert.alert("Limited Quantity Available", "We have only limited quantity available in stocks")
    }
  };

  const decreaseItemQuantity = () => {
    if (item.quantity === 1) {
      removeItemFromCart();
    }
    dispatch(decrementQuantity(item.optionId));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  return (
    <View style={[styles.row, styles.pd10, styles.root]}>
      <Image source={{ uri: foundItem?.image }} style={styles.img} />
      <View style={{ padding: 10, justifyContent: "space-between" }}>
        <View>
          <Text style={styles.name}>{foundItem?.name}</Text>
          <Text style={styles.price}>Rs.{optionData?.price}</Text>
          <Text style={styles.price}>size: {optionData?.name}</Text>
        </View>
        <View style={[styles.row]}>
          <BaseChip
            name="-1"
            onPress={decreaseItemQuantity}
            style={styles.circleText}
          />
          {/* <Text style={styles.circleText} onPress={decreaseItemQuantity}>
            - 1
          </Text> */}
          <Text style={[styles.price, styles.qty, {marginTop: -5}]}>{item.quantity}</Text>
          <BaseChip
            name="+1"
            onPress={increaseItemQuantity}
            style={styles.circleText}
          />
          {/* <Text style={styles.circleText} onPress={increaseItemQuantity}>
            + 1
          </Text> */}
        </View>
      </View>
    </View>
  );
};

export default CartListItem;

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: "row",
  },
  pd10: {
    padding: 10,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  price: {
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
  qty: {
    padding: 10,
    fontSize: 16,
  },
  circleText: {
    borderRadius: 15,
    borderColor: colors.border,
    borderWidth: 2,
    paddingTop: 4,
  },
});
