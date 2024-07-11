import { appButtonStyle } from "../../styles/common_component/AppButtonStyle";
import { Text, TouchableOpacity } from "react-native";

export default function AppButton(props) {
    return (
        <TouchableOpacity
            style={[appButtonStyle.containerStyle, { ...props.containerStyle }]}
            onPress={props.onPress}>
            <Text style={[appButtonStyle.titleStyle, { ...props.titleStyle }]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

AppButton.defaultProps = {
    title: 'Submit'
}