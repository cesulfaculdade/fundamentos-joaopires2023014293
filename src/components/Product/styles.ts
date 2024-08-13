import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    flex: 1,
    margin: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
  },
});