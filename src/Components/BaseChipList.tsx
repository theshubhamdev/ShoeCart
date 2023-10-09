import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";

import BaseChip from "./BaseChip";
import colors from "../Theme/Color";

interface Props {
  chips: string[];
  onPress: (index: number) => void;
  initialSelection?: number | undefined;
  // When disabled, chips except the one in initialSelection would be hidden.
  disabled?: boolean;
}

const BaseChipsList: FC<Props> = ({
  chips,
  onPress,
  initialSelection,
  disabled,
}) => {
  const [selectedId, setSelectedId] = useState<number | undefined>(
    initialSelection
  );

  const chipOnPressHandler = useCallback(
    (index: number) => {
      setSelectedId(index);
      onPress(index);
    },
    [onPress]
  );

  useEffect(() => {
    if (initialSelection) {
      chipOnPressHandler(initialSelection);
    }
  }, []);

  const allowedChips = useMemo(
    () => chips.filter((_, index) => !disabled || index === initialSelection),
    [chips, initialSelection, disabled]
  );

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item, index }) => (
      <View >
        <BaseChip
          name={item}
          onPress={() => chipOnPressHandler(index)}
          bgColor={index === selectedId ? colors.black : colors.white}
          textColor={index === selectedId ? colors.white : colors.black}
        />
      </View>
    ),
    [chipOnPressHandler, selectedId]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={allowedChips}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        extraData={selectedId}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 4,
  },
  row: {
    flexDirection: "row",
  },
  wrapText: {
    flexWrap: "wrap",
  },
});

export default BaseChipsList;
