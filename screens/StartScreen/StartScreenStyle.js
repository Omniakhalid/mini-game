import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

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

export default styles;
