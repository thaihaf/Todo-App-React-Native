import { MaterialIcons } from "@expo/vector-icons";
import React, { Component, useContext, useRef, useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

import { useForm, Controller } from "react-hook-form";

import styles from "./style";
import { CustomButton, CustomInput } from "../../Components";

import { useMutation, useQuery } from "react-query";
import NavigationStrings from "../../Contants/NavigationStrings";
import Toast from "react-native-toast-message";
import Context from "../../Helpers/Context";
import * as SecureStore from 'expo-secure-store';
import { login, updateUser } from "../../Ultils/userApi";

const ConfirmNewPass = (props) => {
	const { navigation } = props;
	const context = useContext(Context);

	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
		setValue
	} = useForm();

	const newPassword = useRef({});
	newPassword.current = watch("newPassword", "");

	const mutationLogin = useMutation(login, {
		onSuccess: async (data) => {
			await SecureStore.setItemAsync("token", data.token)
			await SecureStore.setItemAsync("userID", data.id)

			context.updateUser(data)

			navigation.navigate(NavigationStrings.PROFILE);

			Toast.show({
				type: "success",
				text1: "Change password success! 👋",
				text2: "Hello",
				visibilityTime: 5000,
			});

			setValue([
				{ newPassword: "" },
				{ confirmPassword: "" }
			]);
		},
		onError: (error) => {
			Toast.show({
				type: "error",
				text1: error.response.data.message,
				text2: `Code : ${error.response.data.code}`,
				visibilityTime: 5000,
			});
		},
	});

	const mutationUpdate = useMutation(updateUser, {
		onSuccess: (data) => {
			mutationLogin.mutate({
				username: data.username,
				password: newPassword.current
			});
		},
		onError: (error) => {
			Toast.show({
				type: "error",
				text1: error.response.data.message,
				text2: `Code : ${error.response.data.code}`,
				visibilityTime: 5000,
			});
		},
	});

	const onSubmit = async ({ newPassword }) => {
		mutationUpdate.mutate({
			id: context.user.id,
			details: {
				username: context.user.username,
				newPassword: newPassword,
			},
		});
	};



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
								<CustomInput
									style={styles.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									error={errors.newPassword}
									errorText={errors.newPassword?.message}
									placeholder="New Password"
									placeholderTextColor="#999"
									autoFocus={true}
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
								<CustomInput
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

					<CustomButton
						onPress={handleSubmit(onSubmit)}
						style={styles.primaryBtn}
						text="submit"
						textStyle={styles.primaryBtnText}
					/>
				</View>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

export default ConfirmNewPass;
