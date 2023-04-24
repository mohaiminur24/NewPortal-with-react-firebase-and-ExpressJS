import React from 'react';
import Header from '../Header';
import NavLink from "../NavLinkLayout/NavLink"
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../LeftSidebarLayout/LeftSidebar';

const Home = () => {
    return (
        <div>
            <Header/>
            <NavLink/>
            <div className='w-11/12 mx-auto grid grid-cols-4 gap-5 my-10'>
                <LeftSidebar/>
                <div className='col-span-2'><Outlet/></div>
                <div></div>
            </div>
            
        </div>
    );
};

export default Home;