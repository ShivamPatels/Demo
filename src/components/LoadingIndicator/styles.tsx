import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: screenWidth,
        height: screenHeight,
        backgroundColor: "transparent",
        zIndex: 1,
        elevation: 2,
    },
    middleView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default styles;
