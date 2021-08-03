import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPizza } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

export default function AddPizza() {

    const dispatch = useDispatch()
    const addPizzaState = useSelector(state => state.addPizzaReducer)
    const { error, success, loading } = addPizzaState

    const [name, setName] = useState('')
    const [smallPrice, setSmallPrice] = useState('')
    const [mediumPrice, setMediumPrice] = useState('')
    const [largePrice, setLargePrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    function formHandler(event) {
        event.preventDefault()

        const pizza = {
            name, image, description, category,
            prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        }

        dispatch(addPizza(pizza))

    }

    return (
        <div>
            <div className="text-start">
                <h1>Add pizza</h1>
                {loading &&
                    <Loading />
                }
                {success &&
                    <Success success="Pizza added successfully" />
                }
                {error &&
                    <Error error="Failed to add pizza" />
                }
                <form onSubmit={formHandler}>
                    <input
                        type="text"
                        placeholder="name"
                        value={name}
                        required
                        className="form-control"
                        onChange={(e) => setName(e.target.value)} />
                    <input
                        type="number"
                        placeholder="small variant price"
                        value={smallPrice}
                        required
                        className="form-control"
                        onChange={(e) => setSmallPrice(e.target.value)} />
                    <input
                        type="number"
                        placeholder="medium variant price"
                        value={mediumPrice} className="form-control"
                        onChange={(e) => setMediumPrice(e.target.value)} />
                    <input
                        type="number"
                        placeholder="large variant price"
                        value={largePrice}
                        required
                        className="form-control"
                        onChange={(e) => setLargePrice(e.target.value)} />
                    <input
                        type="text"
                        placeholder="image"
                        value={image}
                        required
                        className="form-control"
                        onChange={(e) => setImage(e.target.value)} />
                    <input
                        type="text"
                        placeholder="description"
                        value={description}
                        required
                        className="form-control"
                        onChange={(e) => setDescription(e.target.value)} />
                    <input
                        type="text"
                        placeholder="category"
                        value={category}
                        required
                        className="form-control"
                        onChange={(e) => setCategory(e.target.value)} />

                    <button className="btn mt-3" type="submit">Add pizza</button>
                </form>
            </div>
        </div>
    )
}
