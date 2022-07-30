import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.Container}>
      <Text style={styles.TextStyle}>{children}</Text>
    </View>
  );
}

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
