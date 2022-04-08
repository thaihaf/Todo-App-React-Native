import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	hiddenActions: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		minWidth: "100%",
		marginBottom: 10,
		height: "92%",

		borderRadius: 25,
		// backgroundColor: ColorCode.primaryBgButton,
		backgroundColor: "#2727",
	},
	hiddenAction: {
		height: "100%",
		borderRadius: 25,
		paddingHorizontal: 20,
		justifyContent: "center"

	}
});

export default styles;
