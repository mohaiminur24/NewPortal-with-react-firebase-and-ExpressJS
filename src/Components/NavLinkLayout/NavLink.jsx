import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../AuthContextLayout/AuthContext';

const NavLink = () => {
    const user = useContext(userContext);
    console.log(user);
    return (
        <div className='w-11/12 mx-auto flex items-center relative my-5'>
            <div className='mx-auto flex gap-5 font-semibold text-gray-600'>

                <Link to="/">Home</Link>
                <button>About</button>
                <button>Career</button>

            </div>
            <div className='right-0 absolute flex gap-5 items-center'>
                <div><FontAwesomeIcon icon={faUser} /></div>
                <button className='px-5 py-2 rounded-sm font-semibold bg-gray-500 text-white'>Login</button>
            </div>
            
        </div>
    );
};

export default NavLink;