import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
export default function Title({ children }) {
  return <Text style={styles.Title}>{children}</Text>;
}
const styles = StyleSheet.create({
  Title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
