import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

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

export default styles;
