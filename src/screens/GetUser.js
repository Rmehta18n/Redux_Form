import { personalInfoStyle } from "../styles/screens/PersonalInfoStyle";
import UserCard from "../components/list_items/UserCard";
import { useDispatch, useSelector } from "react-redux";
import AppLoader from "../components/common/AppLoader";
import NetInfo from '@react-native-community/netinfo';
import { FlatList, Text, View } from "react-native";
import { fetchUser } from "../redux/actions/Action";
import { ERROR_MESSAGE } from "../constants";
import { showErrorMessage } from "../utils";
import { useEffect } from "react";

export default function GetUser() {
    //---------- SET STATES START ----------//
    const loading = useSelector((state) => state.fetchUser.loading)
    const users = useSelector((state) => state.fetchUser.users)
    const error = useSelector((state) => state.fetchUser.error)
    const dispatch = useDispatch()
    //---------- SET STATES END ----------//


    //---------- USE EFFECT START ----------//
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            if (state.isConnected) {
                dispatch(fetchUser())
            } else {
                showErrorMessage(ERROR_MESSAGE.networkError)
            }
        })
        return unsubscribe
    }, [dispatch])
    //---------- USE EFFECT END ----------//


    //---------- RENDER ITEM START ----------//
    const renderItem = ({ item }) => {
        return (
            <UserCard user={item} />
        )
    }
    //---------- RENDER ITEM END ----------//

    return (
        <View style={personalInfoStyle.container}>
            {loading && <AppLoader />}
            {error &&
                <View style={personalInfoStyle.errorMsgContainer}>
                    <Text style={personalInfoStyle.errorMsgStyle}>{error}</Text>
                </View>
            }
            {!loading && !error &&
                < FlatList
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />}
        </View>
    )
}