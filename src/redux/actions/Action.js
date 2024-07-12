import { ADD_USER, DELETE_USER, EDIT_USER, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "../../constants/action_types"
import axios from "axios";

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});

export const fetchUsersFailure = (error) => ({
    type: FETCH_USERS_FAILURE,
    payload: error,
});


export const fetchUserRequest = () => ({
    type: FETCH_USERS_REQUEST
})

export const addUser = (user) => ({
    type: ADD_USER,
    payload: user
})

export const deleteUser = (index) => ({
    type: DELETE_USER,
    payload: index
})

export const updateUser = (user) => ({
    type: EDIT_USER,
    payload: user
})


export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios
            .get('https://reqres.in/api/users?page=2')
            .then((response) => {
                const users = response.data.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch((error) => {
                const errorMsg = JSON.stringify(error.message)
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}