import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
export default function CustomButton({ children, onPress }) {
  return (
    <View style={styles.ButtonOuterContainer}>
      <Pressable
        onPress={onPress}
        //button feedback
        //style takes arrow func. if the button is pressed and it takes propName = pressed
        // to apply the same style of  android_ripple on ios
        style={({ pressed }) =>
          pressed
            ? [styles.ButtonInnerContainer, styles.Pressed]
            : styles.ButtonInnerContainer
        }
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.TextButton}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Pressed: {
    opacity: 0.75,
  },
  ButtonOuterContainer: {
    borderRadius: 12,
    margin: 4,
    overflow: "hidden",
  },
  ButtonInnerContainer: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 4,
    //borderRadius: 12,
  },

  TextButton: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    margin: 2,
  },
});
