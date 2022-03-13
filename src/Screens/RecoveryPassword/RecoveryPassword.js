import { MaterialIcons } from "@expo/vector-icons";
import React, { Component, useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { Header, Button, TextInput } from "../../Components";
import ColorCode from "../../Contants/ColorCode";
import IconStrings from "../../Contants/IconStrings";
import NavigationStrings from "../../Contants/NavigationStrings";

import styles from "./style";
import RegexStrings from "../../Contants/RegexStrings";

const RecoveryPassword = (props) => {
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
              name="email"
              defaultValue=""
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: RegexStrings.EMAIL_REGEX,
                  message: "Email is invalid",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.email}
                  errorText={errors.email?.message}
                  placeholder="Email Address"
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
            text="Send"
            textStyle={styles.primaryBtnText}
          />

          <View style={styles.loginLink}>
            <Text style={styles.loginText}>Already have an account? </Text>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate(NavigationStrings.SIGNIN)}
            >
              <Text style={styles.loginBtnText}> Login now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RecoveryPassword;
