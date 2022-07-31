import { StyleSheet, Text, View, Image } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import Title from "../../components/Title/Title";
import styles from "./GameOverScreenStyle";
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
          source={require("../../assets/images/img.jpg")}
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
