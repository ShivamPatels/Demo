import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { screenWidth } from "../../utils/dimensions";

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 40,
        backgroundColor: colors.BG_BUTTON,
        width: screenWidth - 40,
    },
    title: {
        color: colors.TXT_BUTTON,
        paddingVertical: 12,
        fontSize: 17,
        fontWeight: "700",
    },
});

export default styles;
