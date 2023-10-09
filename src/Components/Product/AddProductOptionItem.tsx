import React, { FC, useMemo } from "react";
import { Control } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import BaseInput from "../BaseInput";
import { IAddProductForm } from "../../Screens/AddProductScreen";
import colors from "../../Theme/Color";

interface Props {
  control: Control<IAddProductForm>;
  index: number;
  remove: () => void;
}

const AddProductOptionItem: FC<Props> = ({ control, index, remove }) => {
  return (
    <View key={index} style={[]}>
      <View
        style={[
          styles.row,
          styles.alignItemsCenter,
          styles.justifyContentCenter,
          { paddingRight: 30 },
        ]}
      >
        <Text style={styles.p10}>{`Option ${index + 1}`}</Text>
        <Text
          onPress={remove}
          style={[{ color: colors.lightgrey, fontSize: 20 }]}
        >
          X
        </Text>
      </View>

      <BaseInput
        control={control}
        name={`options.${index}.id`}
        placeholder={`Option ID`}
        required
      />
      <BaseInput
        control={control}
        name={`options.${index}.name`}
        placeholder={`Option Name`}
        required
      />
      <BaseInput
        control={control}
        name={`options.${index}.price`}
        placeholder={`Price`}
        required
        keyboardType="number-pad"
      />
      <BaseInput
        control={control}
        name={`options.${index}.availableQty`}
        placeholder={`Available Quantity`}
        required
        keyboardType="number-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  p10: {
    padding: 10,
    width: "100%",
  },
});
export default AddProductOptionItem;
