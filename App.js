import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen/GameOverScreen";
import GameScreen from "./screens/GameScreen/GameScreen";
import StartScreen from "./screens/StartScreen/StartScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessNumber, setGuessNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);
  function handlePickedNumber(pickedNum) {
    setUserNumber(pickedNum);
    setGameIsOver(false);
  }
  function handleGameIsOver(numOfRounds) {
    setGameIsOver(true);
    setGuessNumber(numOfRounds);
  }
  function handleRestart() {
    setUserNumber(null);
    setGuessNumber(0);
  }
  let screen = <StartScreen onPickedNumber={handlePickedNumber} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={handleGameIsOver} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        randomNumber={guessNumber}
        userNumber={userNumber}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <View style={styles.RootScreen}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=771&q=80",
        }}
        resizeMode="cover"
        style={styles.RootScreen}
        imageStyle={styles.ImageBackground}
      >
        {/* <SafeAreaView style={styles.RootScreen}>{screen}</SafeAreaView> */}
        {screen}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  RootScreen: {
    backgroundColor: Colors.bkGround,
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.47,
  },
});
