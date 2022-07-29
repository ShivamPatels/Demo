import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../layouts/Detail";
import Login from "../layouts/Login";
import Routes from "./Route";
const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Routes.Login}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen name={Routes.Detail} component={Detail} />
        </Stack.Navigator>
    );
};
