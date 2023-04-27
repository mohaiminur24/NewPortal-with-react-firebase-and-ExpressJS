import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from '../HomeLayout/SingleNews';

const CategoriesData = () => {
    const data = useLoaderData();
    return (
        <div>
            {data && data.map(nnn => <SingleNews key={nnn._id} data={nnn}></SingleNews>)}
            {data.length == 0 && <h1 className='text-red-600 font-bold'>No data found!</h1>}
        </div>
    );
};

export default CategoriesData;