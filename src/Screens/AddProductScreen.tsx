import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../Theme/Color";
import { BaseButton, BaseInput } from "../Components";
import { useForm } from "react-hook-form";
import AddProductOption from "../Components/Product/AddProductOption";
import { getProductsData, saveData } from "../Store/Products/index.actions";
import { traceCallback } from "../Utils";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { updateStocks } from "../Store/Products";

export interface IAddProductForm {
  id: string;
  name: string;
  description: string;
  image: string;
  options: {
    id: string;
    name: string;
    price: number;
    availableQty: number;
  }[];
}
const AddProductScreen = () => {
  const { handleSubmit, control, getValues } = useForm<IAddProductForm>({
    defaultValues: {
      name: "",
      id: "",
      description: "",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      options: [
        {
          id: "",
          name: "",
          price: 0,
          availableQty: 0,
        },
      ],
    },
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onSubmit = async () => {
    const data = getValues();
    try {
      data.options.forEach((v) => {
        v.price = Number(v.price);
        v.availableQty = Number(v.availableQty);
      });
      const previousData = await getProductsData();

      let newData;
      if (previousData) {
        newData = [...previousData, data];
      } else {
        newData = [data];
      }
      dispatch(updateStocks(newData));
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ScrollView style={[styles.p10, styles.root]}>
      <Text style={styles.title}>Add Product</Text>
      <BaseInput
        name="id"
        control={control}
        placeholder="ID of the product"
        required
      />
      <BaseInput
        name="name"
        control={control}
        placeholder="Name of the product"
        required
      />
      <BaseInput
        name="description"
        control={control}
        placeholder="Description of the product"
        required
        rules={{
          maxLength: {
            value: 100,
            message: "Description cannot exceed 100 characters",
          },
        }}
        multiline
      />
      <AddProductOption control={control} />
      <BaseButton
        content="Add Product"
        onPress={handleSubmit(onSubmit)}
        type="primary"
      />
    </ScrollView>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
    flex: 1,
  },
  p10: {
    padding: 10,
  },
  center: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.title,
  },
});
