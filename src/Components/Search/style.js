import { Dimensions, StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
	searchBar: {
		position: "absolute",
		zIndex: 5,
		right: -15,
		bottom: -15,
		width : Dimensions.get("window").width,
		paddingHorizontal: 15,
		paddingBottom: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: ColorCode.borderColor,
	},
	searchInput: {
		width: Dimensions.get("window").width - 55 - 15 - 15 - 15,
		color: ColorCode.appText,
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
