import { StyleSheet, Text, View, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import Title from "../components/Title";
import Colors from "../constants/Colors";
export default function GameOverScreen({
  randomNumber,
  userNumber,
  onRestart,
}) {
  return (
    <View style={styles.RootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.ImageContainer}>
        <Image
          source={require("../assets/images/img.jpg")}
          style={styles.Image}
        />
      </View>
      <Text style={styles.SummaryText}>
        Your phone needs{" "}
        <Text style={styles.HighlightText}>{randomNumber}</Text> rounds to guess
        the number <Text style={styles.HighlightText}>{userNumber}</Text>.
      </Text>
      <CustomButton onPress={onRestart}>Start New Game</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  ImageContainer: {
    overflow: "hidden",
    width: 300,
    height: 300,
    borderRadius: 150,
    margin: 36,
    borderWidth: 3,
    borderColor: Colors.primaryDark,
  },
  SummaryText: {
    margin: 8,
    marginBottom: 22,
    fontSize: 23,
    color: "white",
    //fontWeight: "bold",

    textAlign: "center",
  },
  HighlightText: {
    fontWeight: "bold",
    color: Colors.secondary,
  },
});
