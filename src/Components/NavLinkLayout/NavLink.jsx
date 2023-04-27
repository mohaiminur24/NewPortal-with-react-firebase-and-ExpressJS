import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = () => {
    return (
        <div className='w-11/12 mx-auto flex items-center relative my-5'>
            <div className='mx-auto flex gap-5 font-semibold text-gray-600'>

                <Link to="/">Home</Link>
                <button>About</button>
                <button>Career</button>

            </div>
            <div className='right-0 absolute flex gap-5 items-center'>
                <div>man</div>
                <button className='px-5 py-2 rounded-sm font-semibold bg-gray-500 text-white'>Login</button>
            </div>
            
        </div>
    );
};

export default NavLink;