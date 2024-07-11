import { ADD_USER, DELETE_USER, EDIT_USER } from "../constants/action_types"

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