import { View, StyleSheet } from "react-native";

export default function Card({ children }) {
  return <View style={styles.Container}>{children}</View>;
}
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
