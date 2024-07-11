import { emptyViewStyle } from "../../styles/custom_component/EmptyViewStyle";
import { COLORS, COMPONENT_STRING, ICONS } from "../../constants";
import { Text, View } from "react-native";

export default function EmptyView(props) {
    return (
        <View style={emptyViewStyle.container}>
            <ICONS.Entypo name={'emoji-sad'} color={COLORS.lightBlue} size={40} />
            <Text style={emptyViewStyle.textStyle}>{COMPONENT_STRING.NoRecord}</Text>
        </View>
    )
}