import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Error from '../components/Error'
import Success from '../components/Success'
import Loading from '../components/Loading'

export default function Registerscreen() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')

    const dispatch = useDispatch()
    const registerState = useSelector(state => state.registerUserReducer)
    const { error, success, loading } = registerState

    function register(event) {
        event.preventDefault();
        if (password !== confirmpassword) {
            alert('Passwords do not match')
            return
        }
        const user = { name, email, password }

        dispatch(registerUser(user))
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow p-3 mb-5 bg-white rounded">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                    {loading &&
                        <Loading/>
                    }
                    {success &&
                        <Success success="User registered successfully" />
                    }
                    {error &&
                        <Error error="Failed to register user" />
                    }
                    <form onSubmit={register}>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            type="text" placeholder="name" className="form-control" />
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email" placeholder="email" className="form-control" />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password" placeholder="password" className="form-control" />
                        <input
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            required
                            type="password" placeholder="confirm password" className="form-control" />

                        <button type="submit" className="btn mt-3 mb-3">Register</button>
                        {/* <input type="submit" className="btn mt-3 mb-3" value="Register"/> */}
                        <br />
                        <a style={{ color: 'black' }} href="/login">Click here to login</a>
                    </form>
                </div>
            </div>
        </div>
    )
}
