import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const emptyViewStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.appBg,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        color: COLORS.lightBlue,
        fontWeight: "bold",
        fontSize: 22,
    }
})

export { emptyViewStyle }