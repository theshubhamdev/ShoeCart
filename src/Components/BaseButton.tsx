import React, { FC } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../Theme/Color";

interface Props {
  type?: "primary" | "secondary";
  content: string;
  onPress: () => void;
}
const BaseButton: FC<Props> = ({ type = "primary", content, onPress }) => {
  const backgroundColor = type === "primary" ? colors.btnPrimary : colors.black;
  const textColor = type === "primary" ? colors.btnPrimaryText : colors.white;

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
  },
});
