import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
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
export default styles;
