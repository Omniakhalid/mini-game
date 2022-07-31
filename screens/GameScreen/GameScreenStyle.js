import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 28,
    marginTop: 24,
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
    marginBottom: 10,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
export default styles;
