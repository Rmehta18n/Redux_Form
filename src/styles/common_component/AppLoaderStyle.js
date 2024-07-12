import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const appLoaderStyle = StyleSheet.create({
    modalView: {
        backgroundColor: COLORS.transparent,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 35,
        flex: 1,
    },
    gifContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        height: 65,
        width: 65,
    },
});
export { appLoaderStyle }