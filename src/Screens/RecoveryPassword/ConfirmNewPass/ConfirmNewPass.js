import { MaterialIcons } from "@expo/vector-icons";
import React, { Component, useRef, useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { useForm, Controller } from "react-hook-form";
import { Header, TextInput, Button } from "../../../Components";
import NavigationStrings from "../../../Contants/NavigationStrings";

import styles from "./style";

const ConfirmNewPass = (props) => {
  const { navigation } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const a = "abc";
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Change password</Text>
          <Text style={styles.caption}>Some step to get new password</Text>

          <View style={styles.formGroups}>
            <Controller
              name="oldPassword"
              defaultValue=""
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Old Password is required",
                },
                minLength: {
                  value: 3,
                  message: "Password must be at least 3 characters",
                },
                validate: (value) => a == value || "The old password incorrect",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.oldPassword}
                  errorText={errors.oldPassword?.message}
                  placeholder="Old Password"
                  placeholderTextColor="#999"
                />
              )}
            />

            <Controller
              name="newPassword"
              defaultValue=""
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "New Password is required",
                },
                minLength: {
                  value: 3,
                  message: "Password must be at least 3 characters",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.newPassword}
                  errorText={errors.newPassword?.message}
                  placeholder="New Password"
                  placeholderTextColor="#999"
                />
              )}
            />
            <Controller
              name="confirmPassword"
              defaultValue=""
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Confirm password is required",
                },
                minLength: {
                  value: 3,
                  message: "Password must be at least 3 characters",
                },
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={errors.confirmPassword}
                  errorText={errors.confirmPassword?.message}
                  placeholder="Confirm password"
                  placeholderTextColor="#999"
                />
              )}
            />
          </View>

          <Button
            onPress={handleSubmit(onSubmit)}
            style={styles.primaryBtn}
            text="submit"
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

export default ConfirmNewPass;
