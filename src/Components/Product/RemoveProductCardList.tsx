import {  FlatList, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { productsSliceValue } from "../../Store/Products";
import RemoveProductCard from "./RemoveProductCard";

const RemoveProductCardList = () => {
  const { data } = useSelector(productsSliceValue);
    return <FlatList data={data} renderItem={({ item }) => <RemoveProductCard item={item} />} />;
};

export default RemoveProductCardList;

const styles = StyleSheet.create({});
