import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

type Props = {
    navigation: any;
};
const Detail = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text>Detail Page</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Detail;
