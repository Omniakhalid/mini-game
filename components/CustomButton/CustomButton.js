import { View, Text, Pressable } from "react-native";
import styles from "./CustomButtonStyle";
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
