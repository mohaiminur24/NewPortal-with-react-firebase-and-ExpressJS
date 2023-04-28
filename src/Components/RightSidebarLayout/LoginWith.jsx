import React, { useContext } from 'react';
import {FaGoogle,FaGithub} from 'react-icons/fa'
import { userContext } from '../AuthContextLayout/AuthContext';

const LoginWith = () => {
    const {user,handleloginbygoogle} = useContext(userContext);


    return (
        <div className={user && "hidden"}>
            <h1 className='font-semibold'>Login With</h1>
            <div className='my-5 text-sm text-center'>
                <div onClick={handleloginbygoogle} className='border border-blue-500 py-2 font-semibold rounded-md text-blue-500 my-2 cursor-pointer'> <FaGoogle className='inline-block mr-3' /> Login With Google</div>
                <div className='border border-black py-2 font-semibold rounded-md my-2 cursor-pointer'> <FaGithub className='inline-block mr-3' /> Login With Github</div>
            </div>
        </div>
    );
};

export default LoginWith;