import { StyleSheet } from "react-native";
import { screenWidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 80,
    },
    txtField: {
        marginTop: 20,
        width: screenWidth - 60,
    },
    signIn: {
        marginTop: 30,
        width: screenWidth - 40,
    },
    loginTitle: { fontWeight: "bold", fontSize: 20 },
});
export default styles;
