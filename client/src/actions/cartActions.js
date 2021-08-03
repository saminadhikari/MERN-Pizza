
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (pizza, quantity, variant) => (dispatch, getState) => {
    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        variant: variant,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][variant] * quantity
    }

    if (quantity>10) {
        alert('You cannot add more than 10 pizzas')
        return
    } else if (quantity <= 0) {
        return
    }

    dispatch({type: ADD_TO_CART, payload: cartItem})

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

export const deleteFromCart = (pizza) => (dispatch, getState) => {
    dispatch({type: REMOVE_FROM_CART, payload: pizza})

    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}