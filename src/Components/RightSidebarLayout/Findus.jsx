import React from 'react';
import { FaFacebook,FaTwitterSquare,FaInstagramSquare } from 'react-icons/fa';

const Findus = () => {
    return (
        <div>
            <h1 className='font-semibold'>Find us On:</h1>
            <div className='my-5 w-full'>
                <a className='border text-blue-500 rounded-sm block px-5 py-2' href="facebook">
                   <FaFacebook className='inline-block' /> Facebook
                </a>
                <a className='border text-black rounded-sm block px-5 py-2' href="facebook">
                   <FaTwitterSquare className='inline-block' /> Twitter
                </a>
                <a className='border text-red-500 rounded-sm block px-5 py-2' href="facebook">
                   <FaInstagramSquare className='inline-block' /> instagram
                </a>
            </div>

            <div className='bg-gray-100 p-5 rounded-sm'>
                <h1 className='font-semibold'>Q zone</h1>

                <div className='my-5 flex flex-col gap-5 rounded-md'>
                    <img src="https://images.pexels.com/photos/4982457/pexels-photo-4982457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img src="https://images.pexels.com/photos/5063313/pexels-photo-5063313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img src="https://images.pexels.com/photos/5623062/pexels-photo-5623062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>

            <div className='bg-[url(images/bg1.png)] bg-cover text-white p-5 text-center my-5 rounded-md'>
                <h1 className='font-bold text-3xl'>Create <br />Amazing <br />Newspaper</h1>
                <p className='my-5 text-sm text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsum numquam harum tempore maxime, a fugit aliquid exercitationem iusto officia.</p>
                
            </div>


        </div>
    );
};

export default Findus;