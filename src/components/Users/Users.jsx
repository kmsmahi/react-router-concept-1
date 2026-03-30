import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users=useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>this is user part</h2>
            <div className='gap-4 grid grid-cols-3'>
                {
                users.map(user=><User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;