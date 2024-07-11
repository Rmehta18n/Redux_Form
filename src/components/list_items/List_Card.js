import { listItemStyle } from '../../styles/list_item/ListItemStyle';
import { View, Text, TouchableOpacity, } from 'react-native';
import { COLORS, ICONS } from '../../constants';

export default function ListCard({ item, index, handleEdit, handleDelete }) {
    return (
        <View style={listItemStyle.card}>
            <Text key={'Name'} style={listItemStyle.name}>{item.name}</Text>
            <Text key={'MobileNumber'} style={listItemStyle.info}>Mobile: {item.mobileNumber}</Text>
            <Text key={'Email'} style={listItemStyle.info}>Email: {item.email}</Text>
            <Text key={'Country'} style={listItemStyle.info}>Country: {item.selectedCountry}</Text>
            <Text key={'Address'} style={listItemStyle.info}>Address: {item.address}</Text>

            <View key={'IconContainer'} style={listItemStyle.iconContainer}>
                <TouchableOpacity key={'EditContainer'} onPress={() => handleEdit(item)} style={listItemStyle.icon}>
                    <ICONS.MaterialCommunityIcons name={'pencil'} color={COLORS.green} size={28} />
                </TouchableOpacity>
                <TouchableOpacity key={'DeleteContainer'} onPress={() => handleDelete(index)} style={listItemStyle.icon}>
                    <ICONS.MaterialCommunityIcons name={'delete'} color={COLORS.red} size={28} />
                </TouchableOpacity>
            </View>

        </View>
    )
}