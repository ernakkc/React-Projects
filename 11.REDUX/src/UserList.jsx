import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/userSlice';

function UserList() {
    const dispatch = useDispatch();

    const { users } = useSelector(state => state.user);
    console.log(users);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);



    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
