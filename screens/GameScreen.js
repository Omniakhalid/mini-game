import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import NumberContainer from "../components/NumberContainer";
import Title from "../components/Title";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItems from "../components/GuessLogItems";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let maxBoundary = 100,
  minBoundary = 1;
export default function GameScreen({ userNumber, onGameOver }) {
  const initialNumber = generateRandomBetween(1, 100, userNumber);
  const [currentGuessNumber, SetCurrentGuessNumber] = useState(initialNumber);
  const [guessNumbers, setGuessNumbers] = useState([initialNumber]);
  useEffect(() => {
    if (userNumber === currentGuessNumber) {
      onGameOver(guessNumbers.length);
    }
  }, [currentGuessNumber, userNumber, onGameOver]);
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function handleNextGuess(value) {
    if (
      (value === "lower" && currentGuessNumber < userNumber) ||
      (value === "higher" && currentGuessNumber > userNumber)
    ) {
      Alert.alert("Don't Lie", "You Know That is Wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (value === "lower") {
      maxBoundary = currentGuessNumber;
    } else {
      minBoundary = currentGuessNumber + 1;
    }
    const newRandom = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuessNumber
    );
    SetCurrentGuessNumber(newRandom);
    setGuessNumbers((prev) => [newRandom, ...prev]);
  }
  const guessRoundsListLength = guessNumbers.length;
  return (
    <View style={styles.Container}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuessNumber}</NumberContainer>
      <Card>
        <Text style={styles.TextStyle}>Higher or Lower?</Text>
        <View style={styles.ButtonsContainer}>
          <View style={styles.ButtonContainer}>
            <CustomButton onPress={handleNextGuess.bind(this, "lower")}>
              <Ionicons name="md-remove" size={20} />
            </CustomButton>
          </View>
          <View style={styles.ButtonContainer}>
            <CustomButton onPress={handleNextGuess.bind(this, "higher")}>
              <Ionicons name="md-add" size={20} />
            </CustomButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessNumbers}
          renderItem={(itemData) => (
            <GuessLogItems
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 28,
    marginTop: 24,
  },

  ButtonsContainer: {
    flexDirection: "row",
  },
  ButtonContainer: {
    flex: 1,
  },
  TextStyle: {
    color: Colors.secondary,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
