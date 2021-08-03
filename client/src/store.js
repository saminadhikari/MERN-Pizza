import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { addPizzaReducer, getAllPizzasReducer, getPizzaByIDReducer, updatePizzaReducer } from "./reducers/pizzaReducers";
import { cartReducer } from './reducers/cartReducer';
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from "./reducers/userReducer";

const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzabyidReducer: getPizzaByIDReducer,
    updatePizzaReducer: updatePizzaReducer,
    getAllUsersReducer: getAllUsersReducer
})

const cartItems = () => {
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
        return JSON.parse(cartItems)
    }

    return []
}

const currentUser = () => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
        return JSON.parse(currentUser)
    }

    return null
}

const initialState = {
    cartReducer: {
        cartItems: cartItems()
    },
    loginUserReducer: {
        currentUser: currentUser()
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store