import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getAllUsers } from '../actions/userActions';
import Error from '../components/Error';
import Loading from '../components/Loading';

export default function UsersList() {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state.getAllUsersReducer)
    const { users, error, loading } = usersState

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    return (
        <div>
            <h1>User list</h1>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}
            <table className="table table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i onClick={()=>dispatch(deleteUser(user._id))} className="fa fa-trash"></i></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
