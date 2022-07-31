import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center", //default was stretch
    marginTop: 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primaryDark,
  },
});

export default styles;
