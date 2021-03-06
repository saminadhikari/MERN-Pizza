import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addToCart as addToCartAction } from '../actions/cartActions';

export default function Pizza({ pizza }) {

    const [variant, setVariant] = useState('small');
    const [quantity, setQuantity] = useState(1);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();

    function addToCart () {
        dispatch(addToCartAction(pizza, quantity, variant))
    }

    return (
        <div className="shadow p-3 mb-5 bg-white rounded">
            <div onClick={handleShow}>
                <h1>{pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>
            <div className="flex-container">
                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className='form-control' value={variant} onChange={(e) => setVariant(e.target.value)}>
                        {pizza.varients.map(variant => {
                            return <option key={variant} value={variant}>{variant}</option>
                        })}
                    </select>
                </div>
                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option key={i} value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="flex-container">
                <div className="m-1 w-100">
                    <h1 className="mt-1">Price : {pizza.prices[0][variant] * quantity} Rs/-</h1>
                </div>
                <div className="m-1 w-100">
                    <button className="btn" onClick={addToCart}>Add to cart</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{ height: '400px' }} />
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button onClick={handleClose} className="btn">Close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
