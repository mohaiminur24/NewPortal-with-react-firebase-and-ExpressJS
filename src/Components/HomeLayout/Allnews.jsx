import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNews from './SingleNews';

const Allnews = () => {
    const news = useLoaderData();
    return (
        <div>
            {news && news.map( singlenews => <SingleNews key={singlenews._id} data = {singlenews}></SingleNews> )}
        </div>
    );
};

export default Allnews;