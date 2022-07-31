import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  Container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  TextStyle: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 36,
  },
});

export default styles;
