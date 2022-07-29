import React from "react";
import {
    StyleProp,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
    Text,
} from "react-native";
import colors from "../../utils/colors";
import styles from "./styles";

interface Props {
    // TouchableOpacity
    style?: StyleProp<ViewStyle>;
    activeOpacity?: number;
    disabled?: boolean;
    onPress?: () => void;
    // Text
    titleStyle?: StyleProp<TextStyle>;
    title: string;
}

const TextButton: React.FC<Props> = ({
    // TouchableOpacity
    style,
    activeOpacity,
    disabled,
    onPress,
    // Text
    titleStyle,
    title,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                style,
                disabled && { backgroundColor: colors.TEXT_GREY },
            ]}
            activeOpacity={activeOpacity}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={[styles.title, titleStyle]}> {title}</Text>
        </TouchableOpacity>
    );
};

export default TextButton;
