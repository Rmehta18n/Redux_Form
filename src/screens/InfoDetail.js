import { COLORS, COMPONENT_STRING, ICONS, MESSAGE, ROUTES } from '../constants';
import { personalInfoStyle } from '../styles/screens/PersonalInfoStyle';
import { View, FlatList, Text, Alert } from 'react-native';
import ListCard from '../components/list_items/List_Card';
import EmptyView from '../components/custom/EmptyView';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/Action';


export default function InfoDetail({ navigation }) {
    //---------- SET STATES START ----------//
    const users = useSelector(state => state.users);
    const dispatch = useDispatch()
    //---------- SET STATES END ----------//


    //---------- CUSTOM FUNCTIONS START ----------//

    // For showing delete alert
    const handleDelete = (index) => {
        Alert.alert(
            MESSAGE.deleteUser,
            MESSAGE.deleteUserConfirm,
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: COMPONENT_STRING.Delete,
                    style: 'destructive',
                    onPress: () => {
                        dispatch(deleteUser(index))
                    }
                }
            ]
        );
    };

    //For handle edit user event
    const handleEdit = (item) => {
        navigation.navigate(ROUTES.PERSONAL_INFO, { user: item })
    };
    //---------- CUSTOM FUNCTIONS END ----------//


    //---------- RENDER ITEM START ----------//
    const renderItem = ({ item, index }) => {
        return (
            <ListCard item={item}
                index={index}
                handleDelete={handleDelete}
                handleEdit={handleEdit} />
        )
    }
    //---------- RENDER ITEM END ----------//

    return (
        <View style={personalInfoStyle.container}>
            <ICONS.Ionicons
                onPress={() => navigation.goBack()}
                name={'arrow-back'} size={32}
                color={COLORS.black}
                style={{ width: 50 }} />

            {users.length != 0 ? <FlatList
                data={users}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            /> : <EmptyView />}
        </View>
    )
}

