import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'

export default function Cartscreen() {

    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems
    let subtotal = cartItems.reduce((x, item)=> x+item.price , 0)
    const dispatch = useDispatch()

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 style={{ fontSize: '30px', marginBottom: '30px' }}>My cart</h2>
                    {cartItems.map(item => {
                        return <div className="flex-container" key={item._id}>
                            <div className="text-start m-1 w-100">
                                <h1>{item.name} [{item.variant}]</h1>
                                <h1>Price : {item.quantity} * {item.prices[0][item.variant]} = {item.price}</h1>
                                <h1>Quantity : </h1>
                                <i
                                    onClick={() => dispatch(addToCart(item, parseInt(item.quantity) + 1, item.variant))}
                                    className='fa fa-plus'
                                    aria-hidden="true"></i>
                                <b>{item.quantity}</b>
                                <i
                                    onClick={() => dispatch(addToCart(item, parseInt(item.quantity) - 1, item.variant))}
                                    className='fa fa-minus'
                                    aria-hidden="true"></i>
                                <hr />
                            </div>
                            <div className='m-1 w-100'>
                                <img src={item.image} style={{ height: '80px', width: '80px' }} />
                            </div>
                            <div className='m-1 w-100'>
                                <i
                                    onClick={() => dispatch(deleteFromCart(item))}
                                    className="fa fa-trash mt-4"
                                    aria-hidden="true"></i>
                            </div>
                        </div>
                    })}
                </div>

                <div className="col-md-4 text-end">
                    <h2 style={{fontSize: '30px'}}>Subtotal : {subtotal} /-</h2>
                    <Checkout subtotal={subtotal} onClick={()=>{}}/>
                </div>
            </div>
        </div>
    )
}
