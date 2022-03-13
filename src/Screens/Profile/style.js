import { StyleSheet } from "react-native";
import ColorCode from "../../Contants/ColorCode";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 30,
  },
  topActions: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  info: {
    marginTop: 20,
    width: "100%",
  },
  avt: {
    width: 90,
    height: 90,
    alignSelf: "center",
  },
  name: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  primaryBtn: {
    width: "80%",
    borderRadius: 30,
  },
  tab: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: "#F6F6F5",
    position: "relative",
    marginTop: 17,
  },
  courseName: {
    textTransform: "capitalize",
    fontSize: 17,
    fontWeight: "bold",
    marginRight: "auto",
  },
});

export default styles;
