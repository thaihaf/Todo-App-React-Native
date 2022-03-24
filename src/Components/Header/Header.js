import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./style";

const Header = ({ title, buttonLeft }) => {
	return (
		<View style={styles.container}>
			{buttonLeft && (
				<TouchableOpacity
					activeOpacity={0.5}
					onPress={buttonLeft.handlePress}
					style={styles.buttonLeft}
				>
					<MaterialIcons name={buttonLeft.icon} size={33} color="white" />
				</TouchableOpacity>
			)}

			<Text style={styles.title}>{title}</Text>

			{
				//   <TouchableOpacity
				//   activeOpacity={0.5}
				//   onPress={buttonLeft.handlePress}
				//   style={styles.buttonRight}
				// >
				//   <Ionicons
				//     style={{
				//       width: 30,
				//       textAlign: "center",
				//     }}
				//     name="notifications-outline"
				//     size={29}
				//     color="black"
				//   />
				// </TouchableOpacity>
				// <Image style={styles.imgAvatar} source={ImagePath.imgAvatar} />
			}
		</View>
	);
};

export default Header;
