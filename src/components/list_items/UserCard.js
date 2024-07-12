import { userCardStyle } from "../../styles/list_item/UserCardStyle";
import { View, Image, Text } from "react-native";

export default function UserCard({ user }) {
    return (
        <View style={userCardStyle.card}>
            <View style={userCardStyle.container}>
                <Image source={{ uri: user.avatar }} style={userCardStyle.avatar} />
                <View style={userCardStyle.info}>
                    <Text style={userCardStyle.name}>
                        {user.first_name} {user.last_name}
                    </Text>
                    <Text style={userCardStyle.email}>{user.email}</Text>
                </View>
            </View>
        </View>
    )
}