import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import Error from '../components/Error'
import Loading from '../components/Loading'

export default function Loginscreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const loginState = useSelector(state => state.loginUserReducer)
    const {error, loading} = loginState

    useEffect(()=>{
        if (localStorage.getItem('currentUser')){
            window.location.href = '/'
        }
    }, [])

    function login() {
        const user = { email, password }
        
        dispatch(loginUser(user))
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow p-3 mb-5 bg-white rounded">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                    {loading &&
                        <Loading/>
                    }
                    {error &&
                        <Error error="Invalid credentials" />
                    }
                    <div>
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

                        <button onClick={login} className="btn mt-3 mb-3">Login</button>
                        <br/>
                        <a style={{color: 'black'}} href="/register">Click here to register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
