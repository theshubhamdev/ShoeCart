import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import BaseCard from "../BaseCard";
import { ProductsItem } from "../../Store/Products/index.types";
import { useDispatch, useSelector } from "react-redux";
import { productsSliceValue, updateStocks } from "../../Store/Products";
import colors from "../../Theme/Color";

interface Props {
  item: ProductsItem;
}
const RemoveProductCard: FC<Props> = ({ item }) => {
  const { data } = useSelector(productsSliceValue);
  const dispatch = useDispatch();
  const removeFromStock = () => {
    console.log("remove from stock");
    const newData = data.filter((v) => v.id !== item.id);
    dispatch(updateStocks(newData));
  };
  const removeProductFromStock = () => {
    Alert.alert("Are you sure? You want to Remove the item from stock", "", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Remove",
        onPress: removeFromStock,
      },
    ]);
  };
  return (
    <BaseCard shadow onPress={removeProductFromStock} style={styles.root}>
      <Text>ID: {item.id}</Text>
      <Text>Name: {item.name}</Text>
      <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={removeProductFromStock}>
        <Text style={{ color: colors.error }}>Remove</Text>
      </TouchableOpacity>
    </BaseCard>
  );
};

export default RemoveProductCard;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 10,
    margin: 10,
  },
});
