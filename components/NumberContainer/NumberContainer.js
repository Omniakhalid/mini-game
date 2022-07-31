import { Text, View } from "react-native";
import styles from "./NumberContainerStyle";
export default function NumberContainer({ children }) {
  return (
    <View style={styles.Container}>
      <Text style={styles.TextStyle}>{children}</Text>
    </View>
  );
}
