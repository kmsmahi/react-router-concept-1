import React from 'react';

const User = ({user}) => {
    const {name,email,phone}=user;
    return (
        <div className='border-2 border-green-500 p-4 font-semibold'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;