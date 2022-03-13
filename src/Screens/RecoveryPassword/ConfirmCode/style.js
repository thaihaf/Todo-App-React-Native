import { StyleSheet } from "react-native";
import ColorCode from "../../../Contants/ColorCode";

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 70,
    paddingHorizontal: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textTransform: "capitalize",
    alignSelf: "center",
    color: ColorCode.appText,
  },
  caption: {
    marginTop: 10,
    fontSize: 20,
    textTransform: "capitalize",
    alignSelf: "center",
    width: "60%",
    textAlign: "center",
    color: ColorCode.appText,
  },
  formGroups: {
    marginTop: 20,
  },
  primaryBtn: {
    borderColor: ColorCode.primaryBgButton,
  },
  primaryBtnText: {
    color: ColorCode.appText,
    fontSize: 17,
    textTransform: "uppercase",
    marginRight: 5,
  },
  goBackBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  goBackBtnText: {
    color: "green",
    fontSize: 16,
  },
});

export default styles;
