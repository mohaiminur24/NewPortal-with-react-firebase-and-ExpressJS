import React from 'react';
import Catagorysection from './Catagorysection';
import { FaCalendarCheck } from 'react-icons/fa'

const LeftSidebar = () => {
    return (
        <div>
            <Catagorysection/>

            <div>
                <img className='w-full h-auto my-1' src="https://images.pexels.com/photos/1549974/pexels-photo-1549974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='font-semibold text-gray-700 my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex justify-between font-semibold text-gray-500'><span>sport</span>
                <span> <FaCalendarCheck className='inline-block mx-2'/>  Jan 10, 2023</span></div>
            </div>
            <div>
                <img className='w-full h-auto my-1' src="https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='font-semibold text-gray-700 my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex justify-between font-semibold text-gray-500'><span>sport</span>
                <span> <FaCalendarCheck className='inline-block mx-2'/>  Jan 10, 2023</span></div>
            </div>
            <div>
                <img className='w-full h-auto my-1' src="https://images.pexels.com/photos/4144099/pexels-photo-4144099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p className='font-semibold text-gray-700 my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex justify-between font-semibold text-gray-500'><span>sport</span>
                <span> <FaCalendarCheck className='inline-block mx-2'/>  Jan 10, 2023</span></div>
            </div>
        </div>
    );
};

export default LeftSidebar;