import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({user}) => {
    const {name,email,phone}=user;
    const navigate = useNavigate();
    const handleNavigate=()=>{
        navigate('/mobiles');
    }
    return (
        <div className='border-2 border-green-500 p-4 font-semibold'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link className='p-2 text-blue-500 hover:text-blue-700' to={`/users/${user.id}`}>View Details</Link>
            <button onClick={handleNavigate} className='p-2 bg-blue-500 text-white hover:bg-blue-700'>
                Details Num: {user.id}
            </button>
        </div>
    );
};

export default User;