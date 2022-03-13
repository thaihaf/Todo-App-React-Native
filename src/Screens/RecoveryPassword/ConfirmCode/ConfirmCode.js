import { MaterialIcons } from "@expo/vector-icons";
import React, { Component, useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { Header, Button, TextInput } from "../../../Components";
import ColorCode from "../../../Contants/ColorCode";
import IconStrings from "../../../Contants/IconStrings";
import NavigationStrings from "../../../Contants/NavigationStrings";
import RegexStrings from "../../../Contants/RegexStrings";
import { useForm, Controller } from "react-hook-form";

import styles from "./style";

const ConfirmCode = (props) => {
  const { navigation } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>forgot password</Text>
          <Text style={styles.caption}>Some step to get new password</Text>

          <View style={styles.formGroups}>
            <Controller
              name="code"
              defaultValue=""
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Code is required",
                },
                minLength: {
                  value: 3,
                  message: "Password must be at least 3 characters",
                },
                pattern: {
                  value: RegexStrings.NUMBER_REGEX,
                  message: "Number is required",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.code}
                  errorText={errors.code?.message}
                  keyboardType="number-pad"
                  placeholder="Code"
                  placeholderTextColor="#999"
                />
              )}
            />
          </View>

          <Button
            onPress={handleSubmit(onSubmit)}
            style={styles.primaryBtn}
            icon={IconStrings.icArrowNext}
            iconPos="right"
            text="Next"
            textStyle={styles.primaryBtnText}
          />

          <TouchableOpacity
            style={styles.goBackBtn}
            onPress={() =>
              navigation.navigate(NavigationStrings.RECOVERY_PASSWORD)
            }
          >
            <MaterialIcons
              name={IconStrings.icArrowBack}
              size={21}
              color="white"
            />
            <Text style={styles.goBackBtnText}> Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ConfirmCode;
