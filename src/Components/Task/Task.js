import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
	Text,
	View,
} from "react-native";
import ColorCode from "../../Contants/ColorCode";

import styles from "./style";

const Task = ({ task }) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					backgroundColor: "#FB71A5",
					borderRadius: 17,
					marginRight: 15,
				}}
			>
				<Ionicons
					style={{
						textAlign: "center",
						paddingHorizontal: 14,
						paddingVertical: 10,
					}}
					name="baseball"
					size={41}
					color={ColorCode.appText}
				/>
			</View>
			<Text style={styles.title}>{task.title}</Text>
		</View>
	);
};

export default Task;
