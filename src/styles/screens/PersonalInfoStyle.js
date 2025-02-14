import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const personalInfoStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.appBg,
        padding: 15,
        flex: 1,
    },
    personalInfoStyle: {
        color: COLORS.lightBlue,
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 16,
    },
    headingText: {
        color: COLORS.black,
        fontWeight: 'bold',
        marginVertical: 5,
        fontSize: 16,
    },
    errorMsgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    errorMsgStyle: {
        color: COLORS.black,
        fontWeight: 'bold',
        fontSize: 20,
    }
})
export { personalInfoStyle }