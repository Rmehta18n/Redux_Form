import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const appButtonStyle = StyleSheet.create({
    containerStyle: {
        backgroundColor: COLORS.lightBlue,
        alignItems: 'center',
        borderRadius: 5,
        padding: 13,
    },
    titleStyle: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 16,
    }
})

export { appButtonStyle }