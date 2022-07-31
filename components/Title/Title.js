import { Text } from "react-native";
import styles from "./TitleStyle";
export default function Title({ children }) {
  return <Text style={styles.Title}>{children}</Text>;
}
