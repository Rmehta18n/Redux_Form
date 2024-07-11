import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const countrySelectorStyle = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        marginBottom: 10,
        borderRadius: 5,
        elevation: 5,
    },
    countryButton: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
        paddingVertical: 13,
        borderRadius: 5,
    },
    countryText: {
        color: COLORS.black,
        fontSize: 16,
    },
    modalContainer: {
        backgroundColor: COLORS.transparent,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalContent: {
        backgroundColor: COLORS.white,
        alignItems: 'center',
        borderRadius: 10,
        width: '95%',
        padding: 20,
    },
    countryItem: {
        borderBottomColor: COLORS.borderColor,
        borderBottomWidth: 1,
        padding: 10,
    },
    countryItemText: {
        color: COLORS.black,
        fontSize: 18,
    },
    closeButton: {
        backgroundColor: COLORS.white,
        borderColor: COLORS.black,
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
    },
    closeButtonText: {
        color: COLORS.black,
        fontWeight: 'bold',
        fontSize: 18,
    },
})

export { countrySelectorStyle }