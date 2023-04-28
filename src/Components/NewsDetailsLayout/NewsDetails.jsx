import React from 'react';
import Header from '../Header';
import RightSidebar from '../RightSidebarLayout/RightSidebar';
import { NavLink, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const data = useLoaderData();
    const {image_url,title,details,category_id} = data;

    return (
        <div>
            <Header/>
            <div className='w-11/12 mx-auto grid grid-cols-5 gap-5 my-10'>
                <div className='col-span-4'>
                    <img className='w-full' src={image_url} alt="" />
                    <h1 className='text-2xl my-5 font-semibold'>{title}</h1>
                    <p className='text-sm text-gray-600'>{details}</p>

                    <button className='px-5 py-2 bg-red-600 my-5 rounded-md text-sm text-gray-200 font-semibold'><NavLink to={`/categories/${category_id}`}>All News in this category </NavLink></button>
                </div>
                <RightSidebar/>
            </div>
            
        </div>
    );
};

export default NewsDetails;