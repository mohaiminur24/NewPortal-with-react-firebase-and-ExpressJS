import React from 'react';
import NavLink from '../NavLinkLayout/NavLink';

const LoginPage = () => {
    return (
        <div className='min-h-screen mt-0'>
            <NavLink/>

            <div className='flex items-center min-h-[calc(100vh-100px)]'>
                <div className='w-3/5 bg-gray-50 rounded-md shadow-sm p-16 mx-auto'>
                    <h1 className='text-2xl text-center mb-10 font-semibold'>Login Your Account</h1>
                    
                    <form className='w-3/5 mx-auto'>
                        <label className='font-semibold' htmlFor="email">Email addrress</label>
                        <input className='border mb-2 block w-full outline-none px-5 py-2 text-sm rounded-md bg-white' placeholder='Enter Your Email Address' type="email" name="loginemail" id="email" />
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <input className='border outline-none mb-5 block w-full px-5 py-2 text-sm rounded-md bg-white' placeholder='Enter Your Password' type="password" name="loginpassword" id="password" />
                        <input className='border bg-slate-600 rounded-md text-white mb-5 block w-full px-5 py-2 text-sm ' type="submit" value="Login" />
                        <p>Don't have an Account? <button className='font-semibold text-red-500'>Register</button> </p>
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default LoginPage;