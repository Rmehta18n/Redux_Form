import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const userCardStyle = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        marginVertical: 10,
        borderRadius: 5,
        elevation: 5,
        padding: 5,
    },
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    avatar: {
        borderRadius: 25,
        height: 50,
        width: 50,
    },
    info: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    name: {
        color: COLORS.black,
        fontWeight: 'bold',
        fontSize: 16,
    },
    email: {
        color: COLORS.black,
        fontSize: 14,
    },
});

export { userCardStyle }