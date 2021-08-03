import axios from 'axios'

export const GET_PIZZAS_REQUEST = 'GET_PIZZAS_REQUEST'
export const GET_PIZZAS_SUCCESS = 'GET_PIZZAS_SUCCESS'
export const GET_PIZZAS_FAILED = 'GET_PIZZAS_FAILED'

export const ADD_PIZZA_REQUEST = 'ADD_PIZZA_REQUEST'
export const ADD_PIZZA_SUCCESS = 'ADD_PIZZA_SUCCESS'
export const ADD_PIZZA_FAILED = 'ADD_PIZZA_FAILED'

export const UPDATE_PIZZA_REQUEST = 'UPDATE_PIZZA_REQUEST'
export const UPDATE_PIZZA_SUCCESS = 'UPDATE_PIZZA_SUCCESS'
export const UPDATE_PIZZA_FAILED = 'UPDATE_PIZZA_FAILED'

export const GET_PIZZABYID_REQUEST = 'GET_PIZZABYID_REQUEST'
export const GET_PIZZABYID_SUCCESS = 'GET_PIZZABYID_SUCCESS'
export const GET_PIZZABYID_FAILED = 'GET_PIZZABYID_FAILED'

export const getAllPizzas = () => async dispatch => {
    dispatch({ type: GET_PIZZAS_REQUEST })

    try {
        const response = await axios.get('/api/pizzas/getpizzas')
        // console.log(response)
        dispatch({ type: GET_PIZZAS_SUCCESS, payload: response.data })
    }
    catch (err) {
        dispatch({ type: GET_PIZZAS_FAILED, payload: err })
    }
}

export const filterPizzas = (searchKey, category) => async dispatch => {

    let filteredPizzas;
    dispatch({ type: GET_PIZZAS_REQUEST })

    try {
        const response = await axios.get('/api/pizzas/getpizzas')
        filteredPizzas = response.data.filter(pizza => pizza.name.toLowerCase().includes(searchKey.toLowerCase()))
        if (category !== 'all') {
            filteredPizzas = response.data.filter(pizza => pizza.category.toLowerCase() === category.toLowerCase());
        }
        dispatch({ type: GET_PIZZAS_SUCCESS, payload: filteredPizzas })
    }
    catch (err) {
        dispatch({ type: GET_PIZZAS_FAILED, payload: err })
    }
}

export const addPizza=(pizza)=>async dispatch=>{
    dispatch({type: ADD_PIZZA_REQUEST})
    try{
        const response = await axios.post('/api/pizzas/addpizza', {pizza})
        dispatch({type: ADD_PIZZA_SUCCESS})
    } catch(error) {
        dispatch({type: ADD_PIZZA_FAILED, payload: error})
    }
}

export const getPizzaById=(pizzaid)=>async dispatch=>{
    dispatch({type: GET_PIZZABYID_REQUEST})
    try{
        const response = await axios.post("/api/pizzas/getpizzabyid", {pizzaid})
        dispatch({type: GET_PIZZABYID_SUCCESS, payload: response.data[0]})
    } catch(error) {
        dispatch({type: GET_PIZZABYID_FAILED, payload: error})
    }
}

export const updatePizza=(pizza)=>async dispatch=>{
    dispatch({type: UPDATE_PIZZA_REQUEST})
    try{
        await axios.post('/api/pizzas/updatepizza', pizza)
        dispatch({type: UPDATE_PIZZA_SUCCESS})
        window.location.href = '/admin/pizzalist'
    } catch(error) {
        dispatch({type: UPDATE_PIZZA_FAILED, payload: error})
    }
}

export const deletePizza=(pizzaid)=>async ()=>{
    try {
        await axios.post('/api/pizzas/deletepizza', {pizzaid})
        alert('Pizza deleted successfully')
        window.location.reload()
    } catch(error) {
        alert('Something went wrong')
    }
}