import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePizza, getAllPizzas } from '../actions/pizzaActions'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function PizzasList() {

    const dispatch = useDispatch()
    const pizzasState = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasState

    useEffect(() => {
        dispatch(getAllPizzas())
    }, []);

    return (
        <div>
            <h1>Pizzas list</h1>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}

            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzas && pizzas.map((pizza) => {
                        return <tr>
                            <td>{pizza.name}</td>
                            <td>
                                Small: {pizza.prices[0]['small']} <br />
                                Medium: {pizza.prices[0]['medium']} <br />
                                Large: {pizza.prices[0]['large']}
                            </td>
                            <td>{pizza.category}</td>
                            <td>
                                <i onClick={()=>{dispatch(deletePizza(pizza._id))}} className="fa fa-trash m-1"></i>
                                <Link to={`/admin/editpizza/${pizza._id}`}><i className="fa fa-edit m-1"></i></Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
