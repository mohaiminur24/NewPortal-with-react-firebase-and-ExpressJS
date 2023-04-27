import React, { useContext, useState } from 'react';
import NavLinks from '../NavLinkLayout/NavLink';
import { NavLink } from 'react-router-dom';
import { userContext } from '../AuthContextLayout/AuthContext';


const Registration = () => {
    const [error, setError] = useState('');
    const {handleregisterbyemailpass,setUser,user} = useContext(userContext);

    const handleRegister =(event)=>{
        event.preventDefault();
        const username = event.target.name.value;
        const photoUrl = event.target.photourl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        handleregisterbyemailpass(email,password)
        .then(res=>{
            res.user.displayName = username;
            res.user.photoURL = photoUrl;
            console.log(res.user);
            setUser(res.user);
            event.target.reset();
            alert("Create user successfully!")

        }).then(error=>{
            setError(error.message);
        })

        

    }

    return (
        <div>
            <NavLinks/>

            <div className='flex items-center min-h-[calc(100vh-100px)]'>
                <div className='w-3/5 bg-gray-50 rounded-md shadow-sm p-16 mx-auto'>
                    <h1 className='text-2xl text-center mb-10 font-semibold'>Register Your Account</h1>
                    
                    <form onSubmit={handleRegister} className='w-3/5 mx-auto'>
                        <label className='font-semibold' htmlFor="email">Your Name</label>
                        <input className='border mb-2 block w-full outline-none px-5 py-2 text-sm rounded-md bg-white' placeholder='Enter Your Name' type="text" name="name" id="name"  required/>
                        <label className='font-semibold' htmlFor="email">Photo URL</label>
                        <input className='border mb-2 block w-full outline-none px-5 py-2 text-sm rounded-md bg-white' placeholder='Enter Your Photo URL' type="text" name="photourl" id="photo" required/>
                        <label className='font-semibold' htmlFor="email">Email addrress</label>
                        <input className='border mb-2 block w-full outline-none px-5 py-2 text-sm rounded-md bg-white' placeholder='Enter Your Email Address' type="email" name="email" id="email"  required/>
                        <label className='font-semibold' htmlFor="password">Password</label>
                        <input className='border outline-none mb-5 block w-full px-5 py-2 text-sm rounded-md bg-white' placeholder='Enter Your Password' type="password" name="password" id="password" required/>
                        <input className='border bg-slate-600 rounded-md text-white mb-5 block w-full px-5 py-2 text-sm ' type="submit" value="Register" />
                        <p>Already have an Account? <NavLink to="/login" className='font-semibold text-red-500'>Login</NavLink> </p>
                    </form>
                </div>
            </div>           
        </div>
    );
};

export default Registration;