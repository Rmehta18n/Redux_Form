import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import PersonalInfo from "../screens/PersonalInfo";
import InfoDetail from "../screens/InfoDetail";
import { ROUTES } from "../constants";
import GetUser from "../screens/GetUser";

export default function AppNavigation() {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={ROUTES.GET_USER}
                    component={GetUser}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={ROUTES.PERSONAL_INFO}
                    component={PersonalInfo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={ROUTES.INFO_DETAIL}
                    component={InfoDetail}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}