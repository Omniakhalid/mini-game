import { View } from "react-native";
import styles from "./CardStyle";
export default function Card({ children }) {
  return <View style={styles.Container}>{children}</View>;
}
