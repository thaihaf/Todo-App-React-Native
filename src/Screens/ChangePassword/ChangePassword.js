import { MaterialIcons } from "@expo/vector-icons";
import React, { Component, useContext, useRef, useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { useForm, Controller } from "react-hook-form";

import styles from "./style";
import { Button, TextInput } from "../../Components";

import userApi from "../../Ultils/API/userApi";
import { useMutation, useQuery } from "react-query";
import { setHeader } from "../../Helpers/axios";
import UserContext from "../../Contexts/UserContext";
import NavigationStrings from "../../Contants/NavigationStrings";
import Toast from "react-native-toast-message";

const ConfirmNewPass = (props) => {
  const { navigation } = props;
  const userContext = useContext(UserContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const mutation = useMutation(userApi().updateUser, {
    onSuccess: (data) => {
      console.log(data);
      setHeader(data.token);
      navigation.navigate(NavigationStrings.HOME_STACK);

      Toast.show({
        type: "success",
        text1: "Hello",
        text2: "Change password success! 👋",
        visibilityTime: 5000,
      });
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: `Code : ${error.response.data.code}`,
        text2: error.response.data.message,
        visibilityTime: 5000,
      });
    },
  });

  const onSubmit = async ({ newPassword, ...args }) => {
    mutation.mutate({
      id: userContext.user.id,
      details: {
        username: userContext.user.username,
        newPassword: newPassword,
      },
    });
  };

  const newPassword = useRef({});
  newPassword.current = watch("newPassword", "");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Change password</Text>
          <Text style={styles.caption}>Some step to get new password</Text>

          <View style={styles.formGroups}>
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
                  value === newPassword.current || "The passwords do not match",
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
