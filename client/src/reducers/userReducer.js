import {
    GET_ALL_USERS_FAILURE,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS
} from "../actions/userActions";

export const registerUserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading: true}
        case USER_REGISTER_SUCCESS:
            return {loading: false, success: true}
        case USER_REGISTER_FAILURE:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, success: true, currentUser: action.payload}
        case USER_LOGIN_FAILURE:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const getAllUsersReducer = (state = {users: []}, action) => {
    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
            return { ...state, loading: true }
        case GET_ALL_USERS_SUCCESS:
            return { users: action.payload, loading: false }
        case GET_ALL_USERS_FAILURE:
            return { error: action.payload, loading: false }
        default:
            return state
    }
}