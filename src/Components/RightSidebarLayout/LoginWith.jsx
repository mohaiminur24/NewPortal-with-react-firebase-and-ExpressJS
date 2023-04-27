import React from 'react';
import {FaGoogle,FaGithub} from 'react-icons/fa'

const LoginWith = () => {
    return (
        <div>
            <h1 className='font-semibold'>Login With</h1>
            <div className='my-5 text-sm text-center'>
                <div className='border border-blue-500 py-2 font-semibold rounded-md text-blue-500 my-2 cursor-pointer'> <FaGoogle className='inline-block mr-3' /> Login With Google</div>
                <div className='border border-black py-2 font-semibold rounded-md my-2 cursor-pointer'> <FaGithub className='inline-block mr-3' /> Login With Github</div>
            </div>
        </div>
    );
};

export default LoginWith;