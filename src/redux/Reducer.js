import { ADD_USER, DELETE_USER, EDIT_USER } from "../constants/action_types"

const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((item, index) => index != action.payload)
            }
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(user => user.id == action.payload.id ?
                    { ...user, ...action.payload } : user
                )
            }
        default:
            return state
    }
}

export default userReducer