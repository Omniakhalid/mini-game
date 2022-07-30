import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import Colors from "../constants/Colors";
export default function StartScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function handleNumberInput(value) {
    setEnteredNumber(value);
  }
  function handleConfirmInput() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 100", [
        {
          text: "Ok",
          style: "destructive",
          onPress: () => setEnteredNumber(""),
        },
      ]);
      return;
    }
    onPickedNumber(chosenNumber);
  }
  return (
    <View style={styles.RootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.TextStyle}>Enter a Number</Text>
        <TextInput
          style={styles.Input}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={handleNumberInput}
          value={enteredNumber}
        />
        <View style={styles.ButtonsContainer}>
          <View style={styles.ButtonContainer}>
            <CustomButton onPress={() => setEnteredNumber("")}>
              Reset
            </CustomButton>
          </View>
          <View style={styles.ButtonContainer}>
            <CustomButton onPress={handleConfirmInput}>Confirm</CustomButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  Input: {
    height: 50,
    fontSize: 24,
    width: 50,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    color: Colors.secondary,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
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
  },
});
