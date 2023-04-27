import { NavLink, useLoaderData } from 'react-router-dom';

const Catagorysection = () => {
    const category = useLoaderData();
    
    return (
        <div>
            <h1 className='font-semibold'>All Category</h1>
            <div className='my-5'>
                
                {category && category.map(single =><li key={single.id} className='list-none text-sm my-1'><NavLink className={({isActive})=> isActive && "text-red-500"}
                to={`/categories/${single.id}`}>{single.name}</NavLink></li>)}
            </div>
        </div>
    );
};

export default Catagorysection;