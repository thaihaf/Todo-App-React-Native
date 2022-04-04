import React, { useRef} from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { CustomButton, CustomInput } from "../../Components";
import NavigationStrings from "../../Contants/NavigationStrings";

import styles from "./style";

import Toast from "react-native-toast-message";
import { useMutation } from "react-query";
import { register } from "../../Ultils/userApi";

const SignUp = (props) => {
	const { navigation } = props;

	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const mutation = useMutation(register, {
		onSuccess: (data) => {
			navigation.navigate(NavigationStrings.SIGNIN, {
				username: data.username,
			});

			Toast.show({
				type: "success",
				text1: "Register success! 👋",
				text2: "Hello",
				visibilityTime: 5000,
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

	const onSubmit = ({ username, password }) =>
		mutation.mutate({ username, password });

	const password = useRef({});
	password.current = watch("password", "");

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={styles.container}>
					<Text style={styles.title}>hello again!</Text>
					<Text style={styles.caption}>Wellcome back you're been missed!</Text>

					<View style={styles.formGroups}>
						<Controller
							name="username"
							defaultValue=""
							control={control}
							rules={{
								required: {
									value: true,
									message: "Username is required",
								},
								minLength: {
									value: 3,
									message: "Username must be at least 3 characters",
								},
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<CustomInput
									style={styles.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									error={errors.username}
									errorText={errors.username?.message}
									placeholder="Username"
									placeholderTextColor="#999"
									autoFocus={true}
								/>
							)}
						/>

						<Controller
							name="password"
							defaultValue=""
							control={control}
							rules={{
								required: {
									value: true,
									message: "Password is required",
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
									error={errors.password}
									errorText={errors.password?.message}
									placeholder="Password"
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
								<CustomInput
									style={styles.input}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									error={errors.confirmPassword}
									errorText={errors.confirmPassword?.message}
									placeholder="Confirm Password"
									placeholderTextColor="#999"
								/>
							)}
						/>
					</View>

					<CustomButton
						onPress={handleSubmit(onSubmit)}
						style={styles.primaryBtn}
						text="Sign up"
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

export default SignUp;
