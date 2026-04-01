import React, { use } from 'react';
import { useLoaderData } from 'react-router';
const UserDetails = () => {
    const userDetrailsLoader=useLoaderData();
    const {website,name}=userDetrailsLoader;
    return (
        <div className='border-2 w-72 border-green-500 p-4 font-semibold'>
            <h2>Usre Details here</h2>
            <p>Name: {name}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;