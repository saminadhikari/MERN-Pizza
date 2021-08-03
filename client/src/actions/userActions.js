import axios from 'axios'

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE'
export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST'

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
export const USER_LOGIN_REQUEST = 'USER_REGISTER_REQUEST'

export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST'
export const GET_ALL_USERS_FAILURE = 'GET_ALL_USERS_FAILURE'
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS'


export const registerUser = (user) => async dispatch => {

    dispatch({type: USER_REGISTER_REQUEST})

    try {
        const response = await axios.post('/api/users/register', user)
        dispatch({type: USER_REGISTER_SUCCESS})
    } catch (error) {
        dispatch({type: USER_REGISTER_FAILURE, payload: error})
    }
}

export const loginUser = (user) => async dispatch => {

    dispatch({type: USER_LOGIN_REQUEST})

    try {
        const response = await axios.post('/api/users/login', user)
        dispatch({type: USER_LOGIN_SUCCESS, payload: response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href = '/'
    } catch (error) {
        dispatch({type: USER_LOGIN_FAILURE, payload: error})
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
}

export const getAllUsers = () => async dispatch => {
    dispatch({ type: GET_ALL_USERS_REQUEST })

    try {
        const response = await axios.get('/api/users/getallusers')
        // console.log(response)
        dispatch({ type: GET_ALL_USERS_SUCCESS, payload: response.data })
    }
    catch (err) {
        dispatch({ type: GET_ALL_USERS_FAILURE, payload: err })
    }
}

export const deleteUser=(userid)=>async ()=>{
    try {
        await axios.post('/api/users/deleteuser', {userid})
        alert('User deleted successfully')
        window.location.reload()
    } catch(error) {
        alert('Something went wrong')
    }
}