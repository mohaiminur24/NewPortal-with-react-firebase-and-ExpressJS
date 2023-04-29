import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../AuthContextLayout/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const NavLinks = () => {
    const {user,Logout} = useContext(userContext);

    const handleLogout = () =>{
        Logout().then(res=>{
            toast.success('Logout Successfully!');
        }).then(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className='w-11/12 mx-auto flex items-center flex-wrap relative my-5'>
            <div className='mx-auto flex gap-5 flex-wrap font-semibold text-gray-600'>

                <Link to="/">Home</Link>
                <button>About</button>
                <button>Career</button>

            </div>
            <div className='right-0 mx-auto lg:absolute flex gap-5 flex-wrap items-center'>
                <div>{user && user?.displayName || user?.email}</div>
                {user ? <button onClick={handleLogout} className='px-5 py-2 rounded-md font-semibold bg-gray-500 text-white'>Logout</button> : <NavLink to="/login" className='px-5 py-2 rounded-md font-semibold bg-gray-500 text-white'>Login</NavLink>}
            </div>
            <div><Toaster/></div>            
        </div>
    );
};

export default NavLinks;