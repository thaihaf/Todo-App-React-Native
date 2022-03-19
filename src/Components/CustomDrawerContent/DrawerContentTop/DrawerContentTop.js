import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image } from "react-native";
import * as SecureStore from 'expo-secure-store';

import IconStrings from "../../../Contants/IconStrings";
import ImagePath from "../../../Contants/ImagePath";
import NavigationStrings from "../../../Contants/NavigationStrings";

import styles from "./style";
import Context from "../../../Helpers/Context";

const DrawerContentTop = ({ navigation }) => {
	const context = useContext(Context);

	return (
		<View style={styles.container}>
			<View style={styles.actionsButton}>
				<TouchableOpacity
					activeOpacity={0.5}
					onPress={() => navigation.closeDrawer()}
					style={styles.closeButton}
				>
					<MaterialIcons
						name={IconStrings.icArrowBack}
						size={28}
						color="white"
					/>
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.5}
					onPress={() => navigation.navigate(NavigationStrings.PROFILE)}
					style={styles.settingButton}
				>
					<MaterialIcons
						name={IconStrings.icSettings}
						size={25}
						color="white"
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.userInfo}>
				<Image source={ImagePath.imgAvatar} style={styles.userImage} />
				<Text style={styles.userName}>{context.user.username}</Text>
			</View>
		</View>
	);
};

export default DrawerContentTop;
