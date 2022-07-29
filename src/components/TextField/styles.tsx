import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 5,
    },
    inputStyle: {
        height: 48,
        flex: 1,
        fontSize: 15,
        fontWeight: "normal",
        padding: 0,
        color: colors.FIELD_TXT_COLOR,
    },
});

export default styles;
