import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const listItemStyle = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    card: {
        backgroundColor: COLORS.white,
        marginVertical: 10,
        borderRadius: 5,
        elevation: 5,
        padding: 15,
    },
    name: {
        color: COLORS.black,
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 18,
    },
    info: {
        color: COLORS.black,
        marginBottom: 3,
        fontSize: 16,
    },
    iconContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 10,
    },
    icon: {
        marginLeft: 15,
        padding: 2
    },
})

export { listItemStyle }