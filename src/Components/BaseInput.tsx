import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import colors from "../Theme/Color";

interface IBaseInput<ContentType extends FieldValues> {
  control: Control<ContentType, object>;
  name: Path<ContentType>;
  rules?: {};
  placeholder?: string;
  secureTextEntry?: boolean;
  required?: boolean;
  multiline?: boolean;
  keyboardType?: 'number-pad' | 'default';
}

function BaseInput<ContentType extends FieldValues>({
  control,
  name,
  rules = {},
  placeholder = "",
  secureTextEntry = false,
  required = false,
  multiline = false,
  keyboardType = 'default'
}: IBaseInput<ContentType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required ? `${name} is required` : false,
        ...rules,
      }}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              value={value as string}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
              multiline={multiline}
              keyboardType={keyboardType}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: "100%",

    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    minHeight: 50,
  },
});

export default BaseInput;
