import { Dimensions, FlatList, Text } from "react-native";
import React from "react";
import { ProductItem } from ".";
import { useSelector } from "react-redux";
import { productsSliceValue } from "../../Store/Products";

const ProductList = () => {
  const {data} = useSelector(productsSliceValue)  
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ProductItem item={item} />}
      showsVerticalScrollIndicator={false}
      snapToAlignment={"start"}
      decelerationRate={"fast"}
      snapToInterval={Dimensions.get("window").height}
      ListEmptyComponent={()=> <Text>No Products Available</Text>}
    />
  );
};

export default ProductList;
