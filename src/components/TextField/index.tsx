import React, { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleProp,
    TextStyle,
    KeyboardType,
    Text,
} from "react-native";
import colors from "../../utils/colors";

import styles from "./styles";

enum AutoCapitalize {
    NONE = "none",
    SENTENCES = "sentences",
    WORDS = "words",
    CHARACTERS = "characters",
    UNDEFINED = "",
}

interface Props {
    mainStyle?: StyleProp<TextStyle>;
    title?: string;
    editable?: boolean;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    keyboardType?: KeyboardType;
    secureTextEntry?: boolean;
    autoCapitalize?: AutoCapitalize;
    value?: string;
    onBlur?: () => {};
    maxLength?: number;
    errorMessage?: string;
    rightIcon?: any;
    isHideShow?: boolean;
    multiline?: boolean;
}

const TextField: React.FC<Props> = ({
    mainStyle,
    title,
    editable,
    onChangeText,
    placeholder,
    keyboardType,
    secureTextEntry,
    autoCapitalize,
    value,
    onBlur,
    maxLength,
    errorMessage,
    rightIcon,
    isHideShow,
    multiline,
}) => {
    const [isShow, setIsShow] = useState(false);
    const onPressHideShow = () => {
        setIsShow(!isShow);
    };

    return (
        <View style={[mainStyle]}>
            {title && (
                <Text
                    style={{
                        fontWeight: "400",
                        marginVertical: 10,
                        color: colors.BLACK,
                    }}
                >
                    {title}
                </Text>
            )}

            <View
                style={{
                    height: 48,
                    borderRadius: 10,
                    paddingHorizontal: 10,
                    borderWidth: 1,
                    borderColor:
                        !!errorMessage && errorMessage !== ""
                            ? colors.ERROR_FIELD
                            : colors.TRANSPARENT,
                    backgroundColor: colors.FIELD_BG,
                }}
            >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TextInput
                        style={styles.inputStyle}
                        editable={editable}
                        placeholderTextColor={colors.PLACEHOLDER}
                        onChangeText={onChangeText}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        secureTextEntry={isHideShow ? !isShow : secureTextEntry}
                        autoCapitalize={autoCapitalize || "none"}
                        value={value}
                        autoCorrect={false}
                        onBlur={onBlur}
                        maxLength={maxLength}
                        multiline={multiline}
                    />
                </View>
            </View>

            <View>
                {!!errorMessage && errorMessage !== "" && (
                    <Text
                        style={{
                            marginTop: 5,
                            color: colors.ERROR_FIELD,
                        }}
                    >
                        {errorMessage}
                    </Text>
                )}
            </View>
        </View>
    );
};

TextField.defaultProps = {
    multiline: false,
};

export default TextField;
