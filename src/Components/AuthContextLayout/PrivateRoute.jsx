import React, { useContext } from 'react';
import { userContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(userContext);
    const location = useLocation();

    if(loading){
        return <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='w-20 h-20 border-8 border-red-600 rounded-full border-dashed animate-spin'></div>
        </div>
    };

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    };
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;