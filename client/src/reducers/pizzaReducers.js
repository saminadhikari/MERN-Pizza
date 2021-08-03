import {
    ADD_PIZZA_FAILED,
    ADD_PIZZA_REQUEST,
    ADD_PIZZA_SUCCESS,
    GET_PIZZABYID_FAILED,
    GET_PIZZABYID_REQUEST,
    GET_PIZZABYID_SUCCESS,
    GET_PIZZAS_FAILED,
    GET_PIZZAS_REQUEST,
    GET_PIZZAS_SUCCESS,
    UPDATE_PIZZA_FAILED,
    UPDATE_PIZZA_REQUEST,
    UPDATE_PIZZA_SUCCESS
} from "../actions/pizzaActions";

const initialState = { pizzas: [] }
export const getAllPizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PIZZAS_REQUEST:
            return { ...state, loading: true }
        case GET_PIZZAS_SUCCESS:
            return { pizzas: action.payload, loading: false }
        case GET_PIZZAS_FAILED:
            return { error: action.payload, loading: false }
        default:
            return state
    }
}

export const addPizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PIZZA_REQUEST:
            return { ...state, loading: true }
        case ADD_PIZZA_SUCCESS:
            return { success: true, loading: false }
        case ADD_PIZZA_FAILED:
            return { error: action.payload, loading: false }
        default:
            return state
    }
}

export const getPizzaByIDReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_PIZZABYID_REQUEST:
            return { ...state, loading: true }
        case GET_PIZZABYID_SUCCESS:
            return { pizza: action.payload, loading: false }
        case GET_PIZZABYID_FAILED:
            return { error: action.payload, loading: false }
        default:
            return state
    }
}

export const updatePizzaReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_PIZZA_REQUEST:
            return { ...state, updateLoading: true }
        case UPDATE_PIZZA_SUCCESS:
            return { success: true, updateLoading: false }
        case UPDATE_PIZZA_FAILED:
            return { updateError: action.payload, updateLoading: false }
        default:
            return state
    }
}