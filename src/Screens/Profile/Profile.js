import React, { useContext, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	Alert,
	Image,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../Components";
import IconStrings from "../../Contants/IconStrings";
import ImagePath from "../../Contants/ImagePath";

import styles from "./style";
import Toast from "react-native-toast-message";
import ColorCode from "../../Contants/ColorCode";
import NavigationStrings from "../../Contants/NavigationStrings";
import Context from "../../Helpers/Context";
import { useMutation } from "react-query";
import { deleteUser } from "../../Ultils/API/userApi";
import * as SecureStore from 'expo-secure-store';
import { navigate } from "../../Navigation/RootNavigation";

const Profile = ({ navigation }) => {
	const context = useContext(Context);

	const actionSignout = async () => {
		navigate(NavigationStrings.LOGOUT)

		Toast.show({
			type: "success",
			text1: "Signout success! 👋",
			visibilityTime: 5000,
		});

	}
	const handleLogout = () => {
		Alert.alert("Sign out Account",
			`Chắc chắn sign out ?`,
			[
				{
					text: "Signout",
					onPress: actionSignout
				},
				{
					text: "Cancel"
				},
			], { cancelable: false }
		)

	}

	const mutation = useMutation(deleteUser, {
		onSuccess: async (data) => {
			navigate(NavigationStrings.LOGOUT)

			Toast.show({
				type: "success",
				text1: "Delete Account success! 👋",
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

	const handleDeleteAccount = () => {
		Alert.alert("Sign out Account",
			`Chắc chắn delete account ?`,
			[
				{
					text: "Delete",
					onPress: () => mutation.mutate(context.user.id)
				},
				{
					text: "Cancel"
				},
			], { cancelable: false }
		)
	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<View style={styles.topActions}>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={() => navigation.goBack()}
					>
						<Ionicons
							name={IconStrings.icArrowBack2}
							size={29}
							color={ColorCode.appText}
						/>
					</TouchableOpacity>


					<Text style={styles.title}>Profile</Text>

					<TouchableOpacity
						activeOpacity={0.5}
						onPress={handleLogout}
					>
						<Ionicons
							name="log-out-outline"
							size={29}
							color={ColorCode.appText}
						/>
					</TouchableOpacity>

				</View>

				<View style={[styles.info]}>
					<Image style={styles.avt} source={ImagePath.imgAvatar} />
					<Text style={styles.name}>{context.user.username}</Text>
				</View>

				<Button
					style={styles.primaryBtn}
					text="Change Password"
					textStyle={styles.primaryBtnText}
					onPress={() => navigation.navigate(NavigationStrings.CHANGE_PASSWORD)}
				/>
				<Button
					style={styles.primaryBtn}
					text="Delete Account"
					textStyle={styles.primaryBtnText}
					onPress={handleDeleteAccount}
				/>

			</View>
		</SafeAreaView>
	);
};

export default Profile;
