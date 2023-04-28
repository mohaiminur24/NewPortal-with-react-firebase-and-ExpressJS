import React, { useContext } from 'react';
import { userContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(userContext);
    const location = useLocation();

    if(loading){
        return <div>Loading .....</div>
    }

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;