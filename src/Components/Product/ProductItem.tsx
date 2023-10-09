import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React, { FC, useState } from "react";
import BaseButton from "../BaseButton";
import { addToCart, cartSliceValue } from "../../Store/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { ProductsItem } from "../../Store/Products/index.types";
import BaseFooterModal from "../BaseFooterModal";
import colors from "../../Theme/Color";
import BaseChipsList from "../BaseChipList";
import { traceCallback } from "../../Utils";

interface Props {
  item: ProductsItem;
}
const ProductItem: FC<Props> = (props) => {
  const { id, name, description, options, image } = props.item;

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const cartItems = useSelector(cartSliceValue);

  const navigation = useNavigation();
  const itemInCart = cartItems.items.find(
    (item) => id === item.productId && selectedOption === item.optionId
  );
  const dispatch = useDispatch();

  const price = options.find((v) => v.availableQty > 0)?.price || 0;

  const navigateToCart = () => {
    traceCallback("navigateToCart");
    setModalVisible(false);
    navigation.navigate("Cart");
  };

  const openOptionModal = () => {
    traceCallback("openOptionModal");
    setModalVisible(true);
  };

  const onOptionSelected = () => {
    traceCallback("onOptionSelected.43");
    if (itemInCart) {
      traceCallback("onOptionSelected.45");
      // Navigate to Cart
      navigateToCart();
      return;
    }
    if (!selectedOption) {
      traceCallback("onOptionSelected.51");
      return;
    }
    traceCallback("onOptionSelected.54");
    dispatch(
      addToCart({ productId: id, optionId: selectedOption, quantity: 1 })
    );
  };

  return (
    <View
      style={[
        styles.root,
        {
          height: Dimensions.get("window").height,
        },
      ]}
    >
      <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {price > 0 ? `Rs. ${price}` : "Out of Stock"}
        </Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <BaseButton
          type="primary"
          content={itemInCart ? "Go To Cart" : "Add to Cart"}
          onPress={openOptionModal}
        />
      </View>
      <BaseFooterModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <BaseChipsList
          chips={options.map((v) => v.name)}
          onPress={(index) => setSelectedOption(options[index].id)}
        />
        <BaseButton
          type="secondary"
          content={itemInCart ? "Go To Cart" : "Add to Cart"}
          onPress={onOptionSelected}
        />
      </BaseFooterModal>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: colors.background,
  },
  titles: {
    width: "100%",
    marginLeft: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
    color: colors.title,
  },
  subtitle: {
    fontSize: 16,
    color: colors.secondaryText,
  },

  image: {
    width: "100%",
    resizeMode: "cover",
    height: "40%",
  },

  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
});
