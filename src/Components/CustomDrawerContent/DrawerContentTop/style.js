import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#007BFC",
  },
  actionsButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 56,
  },
  closeButton: {},
  settingButton: {},

  userInfo: {
    paddingTop: 6,
    paddingBottom: 17,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontWeight: "800",
    color: "white",
    textTransform: "capitalize",
  },
});

export default styles;
