import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import Card from "../../components/Card/Card";
import CustomButton from "../../components/CustomButton/CustomButton";
import Title from "../../components/Title/Title";
import styles from "./StartScreenStyle";
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
