import {  StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
	paging__list: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginBottom :65
	},
	paging__item: {
		width: 50,
		height: 45,
		marginHorizontal: 3,

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",

		borderWidth: 0,
		borderRadius: 10,
		backgroundColor: "#272732",
	},
	paging__chevron: {
		marginHorizontal: 10,
	},
	paging__input: {
		width: 50,
		height: 45,
		paddingHorizontal: 17,
		marginHorizontal: 3,
		fontSize: 18,
		justifyContent: "center",
		alignItems: "center"
	},

	paging__item_active: {
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: ColorCode.primaryBgButton
	},
	paging__item_disabled: {
		color: "gray",
		borderColor: "gray"
	},
	paging__item_hidden :{
		display: "none",
		opacity: 0
	},

	paging__icon_active: {
		color: ColorCode.primaryBgButton
	},
	paging__icon_disabled: {
		color: "gray"
	},
});

export default styles;
