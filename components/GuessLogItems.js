import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function GuessLogItems({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess {guess}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primaryDark,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    //shadow for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
