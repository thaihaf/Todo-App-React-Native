import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    minWidth: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,

    borderRadius: 8,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  title: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 10,
  },
  taskImage: {
    width: 65,
    height: 65,
  },
});

export default styles;
