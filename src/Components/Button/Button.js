import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const Button = (props) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      {props.icon && props.iconPos == "left" && (
        <Ionicons name={props.icon} size={24} color={ColorCode.appText} />
      )}
      {props.text && (
        <Text style={[styles.buttonText, props.textStyle]}>{props.text}</Text>
      )}
      {props.icon && props.iconPos == "right" && (
        <Ionicons name={props.icon} size={22} color={ColorCode.appText} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    height: 55,
    marginTop: 15,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: ColorCode.appText,
    borderRadius: 10,
    backgroundColor: ColorCode.primaryBgButton,
    color: ColorCode.appText,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: ColorCode.appText,
    fontSize: 17,
    marginHorizontal: 5,
  },
});

export default Button;
