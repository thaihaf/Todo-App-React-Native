import { Dimensions, StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  searchBar: {
    width: "100%",
    paddingHorizontal: 15,
    paddingBottom: 15,
    position: "absolute",
    bottom: 0,
    zIndex: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: ColorCode.primaryBgButton,
  },
  searchInput: {
    width: Dimensions.get("window").width - 55 - 15 - 15 - 15,
    color: ColorCode.appText,
  },
  closeSearchBtn: {
    backgroundColor: ColorCode.appBackgound,
  },
  searchBtn: {
    position: "absolute",
    right: 15,
    bottom: 15,
    zIndex: 5,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default styles;
