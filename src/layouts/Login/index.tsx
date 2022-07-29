import React, { useState } from "react";
import { View, Text, ScrollView, Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";

import TextField from "../../components/TextField";
import ErrorMessage from "../../utils/ErrorMessage";
import { REGEX } from "../../utils/validation";
import TextButton from "../../components/TextButton";
import colors from "../../utils/colors";
import Routes from "../../navigation/Route";
import LoadingIndicator from "../../components/LoadingIndicator";
import styles from "./styles";
import { postRequest } from "./../../api";
import Urls from "../../api/urls";

type Props = {
    navigation: any;
};

const Login = ({ navigation }: Props) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({ mode: "onChange" });

    const [isLoading, setIsLoading] = useState(false);

    const onSignInPress = (data: any) => {
        setIsLoading(true);

        Keyboard.dismiss();

        postRequest(Urls.LOGIN, {
            email: data.email,
            password: data.password,
        }).then(
            (response) => {
                setIsLoading(false);
                navigation.navigate(Routes.Detail);
            },
            (error) => {
                setIsLoading(false);
                if (
                    error &&
                    error.response &&
                    error.response.data &&
                    error.response.data.error
                ) {
                    alert(error.response.data.error);
                }
            }
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.loginTitle}>LOGIN</Text>

                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            mainStyle={styles.txtField}
                            placeholder="Email address"
                            title="Email"
                            value={value}
                            onChangeText={onChange}
                            errorMessage={errors?.email?.message}
                            isHideShow={false}
                        />
                    )}
                    name="email"
                    rules={{
                        required: {
                            value: true,
                            message: ErrorMessage.EMAIL_EMPTY,
                        },
                        pattern: {
                            value: REGEX.EMAIL,
                            message: ErrorMessage.EMAIL_INVALID,
                        },
                    }}
                />

                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            mainStyle={styles.txtField}
                            title="Password"
                            placeholder="Password"
                            secureTextEntry={true}
                            value={value}
                            onChangeText={onChange}
                            errorMessage={errors?.password?.message}
                            isHideShow={true}
                        />
                    )}
                    name="password"
                    rules={{
                        required: {
                            value: true,
                            message: ErrorMessage.PASSWORD_EMPTY,
                        },
                    }}
                />

                <TextButton
                    style={[
                        styles.signIn,
                        {
                            backgroundColor: !isValid
                                ? colors.BG_BUTTON
                                : colors.BLACK,
                        },
                    ]}
                    disabled={!isValid}
                    titleStyle={{
                        color: !isValid ? colors.TXT_BUTTON : colors.WHITE,
                    }}
                    title={"Sign in"}
                    onPress={handleSubmit(onSignInPress)}
                />
            </ScrollView>
            {isLoading && <LoadingIndicator />}
        </View>
    );
};

export default Login;
