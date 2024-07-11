import { appTextInputStyles } from "../../styles/common_component/AppTextInputStyles";
import { TextInput } from "react-native";
import { COLORS } from "../../constants";

export default function AppTextInput(props) {
    return (
        <TextInput
            ref={props.reference}
            style={[appTextInputStyles.textInputStyle, { ...props.textInputStyle }]}
            {...props}
            placeholderTextColor={COLORS.appBg}
            value={props.value}
        />
    )
}

AppTextInput.defaultProps = {
    clearButtonMode: 'while-editing',
    keyboardType: 'default',
    autoCapitalize: "none",
    returnKeyLabel: 'go',
    placeholder: 'Enter',
    returnKeyType: 'go',
}

