import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterPizzas } from '../actions/pizzaActions'

export default function Filter() {
    const dispatch = useDispatch()
    const [searchKey, setSearchKey] = useState('')
    const [category, setCategory] = useState('all')

    return (
        <div className="container">
            <div className="row justify-content-center shadow p-3 mb-5 bg-white rounded">
                <div className="col-md-3">
                    <input
                    value={searchKey}
                    onChange={(e)=>setSearchKey(e.target.value)}
                    type="text" className="form-control" placeholder="search pizzas"/>
                </div>
                <div className="col-md-3">
                    <select className="form-control mt-2" value={category} onChange={(e)=>setCategory(e.target.value)}>
                        <option value="all">All</option>
                        <option value="veg">Veg</option>
                        <option value="nonveg">Non veg</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <button className="btn mt-2" onClick={()=>dispatch(filterPizzas(searchKey, category))}>Filter</button>
                </div>
            </div>
        </div>
    )
}
