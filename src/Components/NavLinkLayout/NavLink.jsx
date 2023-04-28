import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../AuthContextLayout/AuthContext';

const NavLinks = () => {
    const {user,Logout} = useContext(userContext);

    const handleLogout = () =>{
        Logout().then(res=>{
            alert("Logout successfully!")
        }).then(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className='w-11/12 mx-auto flex items-center relative my-5'>
            <div className='mx-auto flex gap-5 font-semibold text-gray-600'>

                <Link to="/">Home</Link>
                <button>About</button>
                <button>Career</button>

            </div>
            <div className='right-0 absolute flex gap-5 items-center'>
                <div>{user && user?.displayName || user?.email}</div>
                {user ? <button onClick={handleLogout} className='px-5 py-2 rounded-md font-semibold bg-gray-500 text-white'>Logout</button> : <NavLink to="/login" className='px-5 py-2 rounded-md font-semibold bg-gray-500 text-white'>Login</NavLink>}
            </div>
            
        </div>
    );
};

export default NavLinks;