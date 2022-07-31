import { View, Text } from "react-native";
import styles from "./GuessLogItemStyle";
export default function GuessLogItems({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess {guess}</Text>
    </View>
  );
}
