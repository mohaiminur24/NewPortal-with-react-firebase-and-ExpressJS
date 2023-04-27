import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faShareNodes, faEye,faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';

const SingleNews = ({data}) => {
    return (
        <div className='rounded-md border my-5'>
            <div className='flex items-center gap-5 p-5 bg-gray-100'>
                <img className='w-10 h-10 rounded-full' src={data.author.img} alt="" />
                <div className='flex justify-between w-full items-center'>
                    <div className='text-xs'>
                        <h1>{data.author.name}</h1>
                        <h2>{moment(data.author.published_date).format("MMM Do YYYY")}</h2>
                    </div>
                    <div className='flex gap-3'>
                        <FontAwesomeIcon icon={faBookmark} />
                        <FontAwesomeIcon icon={faShareNodes} />
                    </div>
                </div>
            </div>

            <div className='p-5'>
                <h1 className='font-bold text-2xl mb-5'>{data.title}</h1>
                <img className='w-full' src={data.image_url} alt="" />
                <p className='mt-5 text-sm text-gray-400'>{data?.details.length > 400 ? data.details.slice(0,400) : data.details}</p>
                <span>{data?.details.length > 400 && <Link to={`/news/${data._id}`} className='text-sm font-semibold text-red-500'>Read More</Link>}</span>
            </div>

            <div className='p-5 border flex justify-between'>
                <div className='flex items-center gap-5'>
                    <Rating
                    placeholderRating={data.rating.number}
                    emptySymbol={<FontAwesomeIcon icon={faStarHalfStroke} />}
                    placeholderSymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon icon={faStar} />}
                    />
                    <h1 className='font-bold'>{data.rating.number}</h1>
                </div>
                
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={faEye} />
                    <h2>{data.total_view}</h2>
                </div>
            </div>

            
        </div>
    );
};

export default SingleNews;