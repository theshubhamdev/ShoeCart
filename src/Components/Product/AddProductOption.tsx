import React, { FC, useCallback, useMemo } from "react";
import { Control, useFieldArray } from "react-hook-form";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { IAddProductForm } from "../../Screens/AddProductScreen";
import AddProductOptionItem from "./AddProductOptionItem";
import colors from "../../Theme/Color";

interface Props {
  control: Control<IAddProductForm>;
}

const AddProductOption: FC<Props> = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  const addItem = useCallback(() => {
    append({ id: "", name: "", availableQty: 1, price: 1000 });
  }, [append]);

  const renderOption = useMemo(() => {
    return fields.map((field, index) => (
      <AddProductOptionItem
        key={field.id}
        control={control}
        index={index}
        remove={() => remove(index)}
      />
    ));
  }, [control, fields, remove]);

  return (
    <View>
      <View>
        <View>
          <Text>Size Options</Text>
        </View>
        <View />
        {renderOption}
        <Pressable onPress={addItem} >
          <View>
            <Text style={[styles.addNew]}>ADD NEW</Text>
          </View>
        </Pressable>
      </View>
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
  dashLine: {
    borderTopWidth: 1.5,
    borderColor: colors.black,
    opacity: 0.3,
  },
  addNew: {
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
export default AddProductOption;
