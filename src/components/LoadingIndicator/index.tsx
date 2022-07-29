import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

const LoadingIndicator = () => {
    return (
        <View style={styles.container}>
            <View style={styles.middleView}>
                <ActivityIndicator size="large" />
            </View>
        </View>
    );
};

export default LoadingIndicator;
