import React, { useContext, useEffect } from "react";
import {
	Alert,
	Keyboard,
	KeyboardAvoidingView,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";
import {
	View,
	Text,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import Toast from "react-native-toast-message";

import { TextInput, Button } from "../../Components";
import IconStrings from "../../Contants/IconStrings";
import NavigationStrings from "../../Contants/NavigationStrings";

import styles from "./style";
import { login } from "../../Ultils/API/userApi";
import { useMutation } from "react-query";
import * as SecureStore from 'expo-secure-store';
import Context from "../../Helpers/Context";

const SignIn = ({ navigation, route }) => {
	const context = useContext(Context);
	const params = route.params;

	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();

	useEffect(() => {
		if (params) {
			setValue("username", params.username);
		}
	}, [route.params]);

	const mutation = useMutation(login, {
		onSuccess: async (data) => {
			await SecureStore.setItemAsync("token", data.token)
			await SecureStore.setItemAsync("userID", data.id)

			context.updateUser(data)

			Toast.show({
				type: "success",
				text1: "Login success! 👋",
				visibilityTime: 5000,
			});

			setValue([
				{ username: "" },
				{ password: "" }
			]);
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

	const onSubmit = async (data) => mutation.mutate(data);

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<SafeAreaView style={{ flex: 1 }}>
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<ScrollView style={styles.container}>
						<Text style={styles.title}>Sign In</Text>
						<Text style={styles.caption}>
							Wellcome back you're been missed!
						</Text>

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
									// pattern: {
									//   value: RegexStrings.EMAIL_REGEX,
									//   message: "Username is invalid",
									// },
								}}
								render={({ field: { onChange, onBlur, value } }) => (
									<TextInput
										style={styles.input}
										onBlur={onBlur}
										onChangeText={onChange}
										value={value}
										error={errors.username}
										errorText={errors.username?.message}
										placeholder="Username"
										placeholderTextColor="#999"
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
									<TextInput
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
						</View>

						<Button
							onPress={handleSubmit(onSubmit)}
							style={styles.primaryBtn}
							text="Sign In"
							textStyle={styles.primaryBtnText}
						/>

						<Text style={styles.seperator}>--- or continue with ---</Text>

						<Button
							onPress={() => Alert.alert("Title", "Content")}
							style={styles.btnGoogle}
							icon={IconStrings.lgGoogle}
							iconPos="left"
							text="Continue with Google"
						/>

						<View style={styles.registerLink}>
							<Text style={styles.registerText}>Not a member? </Text>

							<TouchableOpacity
								style={styles.registerBtn}
								onPress={() => navigation.navigate(NavigationStrings.SIGNUP)}
							>
								<Text style={styles.registerBtnText}> Register now</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</TouchableWithoutFeedback>
	);
};

export default SignIn;
