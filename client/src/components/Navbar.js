import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../actions/userActions'

export default function Navbar() {

    const cartState = useSelector(state => state.cartReducer)
    const loginState = useSelector(state => state.loginUserReducer)
    const { currentUser } = loginState
    const [openDropdown, setOpenDropdown] = useState(false)
    const dispatch = useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">Sam Pizza</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {currentUser
                            ? (
                                <div className="dropdown" onClick={()=>setOpenDropdown(!openDropdown)}>
                                    <a className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {currentUser.name}
                                    </a>
                                    <div className={`dropdown-menu ${openDropdown ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Orders</a>
                                        <a className="dropdown-item" href="#" onClick={()=>dispatch(logoutUser())}>Logout</a>
                                    </div>
                                </div>
                            )
                            : (
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            )
                        }
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart {cartState.cartItems.length}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
