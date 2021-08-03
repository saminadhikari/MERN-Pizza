import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaById, updatePizza } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

export default function EditPizza({ match }) {

    const dispatch = useDispatch()
    const getPizzaState = useSelector(state => state.getPizzabyidReducer)
    const { error, pizza, loading } = getPizzaState

    const getUpdateState = useSelector(state => state.updatePizzaReducer)
    const { updateError, success, updateLoading } = getUpdateState

    const [name, setName] = useState('')
    const [smallPrice, setSmallPrice] = useState('')
    const [mediumPrice, setMediumPrice] = useState('')
    const [largePrice, setLargePrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (pizza && pizza._id === match.params.pizzaid) {
            setName(pizza.name)
            setSmallPrice(pizza.prices[0]['small'])
            setMediumPrice(pizza.prices[0]['medium'])
            setLargePrice(pizza.prices[0]['large'])
            setImage(pizza.image)
            setDescription(pizza.description)
            setCategory(pizza.category)
        }
        else {
            dispatch(getPizzaById(match.params.pizzaid))
        }
    }, [pizza])

    function formHandler(event) {
        event.preventDefault()

        const updatedPizza = {
            _id: match.params.pizzaid,
            name, image, description, category,
            prices: {
                small: smallPrice,
                medium: mediumPrice,
                large: largePrice
            }
        }

        dispatch(updatePizza(updatedPizza))
    }

    return (
        <div>
            <h1>Edit pizza</h1>
            {(loading || updateLoading) &&
                <Loading />
            }
            {error &&
                <Error error="Failed to get pizza" />
            }
            {updateError &&
                <Error error="Failed to update pizza" />
            }
            {success &&
                <Success success="Pizza updated successfully"/>
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

                    <button className="btn mt-3" type="submit">Edit pizza</button>
                </form>
        </div>
    )
}
