import React, { useEffect, useState } from 'react';

const Catagorysection = () => {
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        fetch("categories.json").then(res=> res.json()).then(data => setCategory(data));
    },[])
    
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