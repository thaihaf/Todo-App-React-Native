//import liraries
import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const CustomInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[
			styles.input, props.error && styles.borderError, props.style]}
      />
      {props.errorText && (
        <Text style={styles.errorText}>{props.errorText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  input: {
    height: 55,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: ColorCode.appText,
    borderRadius: 10,
    backgroundColor: "transparent",
    color: ColorCode.appText,
  },
  borderError: {
    borderColor: ColorCode.errorInput,
  },
  errorText: {
    color: ColorCode.errorInput,
    marginTop: 5,
    paddingHorizontal: 16,
  },
});

//make this component available to the app
export default CustomInput;
