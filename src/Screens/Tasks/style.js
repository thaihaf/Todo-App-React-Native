import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
		padding : 20
	},
	menuActions: {
		position: "absolute",
		bottom: 15,
		right: 15,
		zIndex: 5,
		flexDirection: "row",
		alignItems: "flex-end",
	},
	btnAction: {
		width: 50,
		height: 50,
		borderRadius: 50,
		marginLeft: 10,
	},

	btnActionSmall: { width: 40, height: 40 },
});

export default styles;
