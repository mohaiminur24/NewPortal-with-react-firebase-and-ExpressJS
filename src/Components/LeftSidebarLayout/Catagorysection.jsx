import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagorysection = () => {
    const category = useLoaderData();
    
    return (
        <div>
            <h1 className='font-semibold'>All Category</h1>
            <div className='my-5'>
                {category && category.map(single =><li className='list-none'><button className='text-sm my-1'>{single.name}</button></li>)}
            </div>
        </div>
    );
};

export default Catagorysection;