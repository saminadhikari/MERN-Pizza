import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom'
import UsersList from './UsersList'
import PizzasList from './PizzasList'
import AddPizza from './AddPizza'
import EditPizza from './EditPizza'

export default function Adminscreen() {

    const loginState = useSelector(state => state.loginUserReducer)
    const { currentUser } = loginState

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2 style={{ fontSize: '30px' }}>Admin panel</h2>
                    <ul className="admin-function">
                        <li><Link to="/admin/userslist">User List</Link></li>
                        <li><Link to="/admin/pizzalist">Pizzas List</Link></li>
                        <li><Link to="/admin/addpizza">Add New Pizza</Link></li>
                    </ul>
                    
                    <Switch>
                        <Route path="/admin" component={UsersList} exact/>
                        <Route path="/admin/userslist" component={UsersList} exact/>
                        <Route path="/admin/pizzalist" component={PizzasList} exact/>
                        <Route path="/admin/addpizza" component={AddPizza} exact/>
                        <Route path="/admin/editpizza/:pizzaid" component={EditPizza} exact/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
