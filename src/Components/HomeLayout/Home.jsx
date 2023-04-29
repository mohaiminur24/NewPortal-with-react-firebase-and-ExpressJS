import React from 'react';
import Header from '../Header';
import NavLinks from "../NavLinkLayout/NavLink"
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../LeftSidebarLayout/LeftSidebar';
import RightSidebar from '../RightSidebarLayout/RightSidebar';

const Home = () => {
    return (
        <div>
            <Header/>
            <NavLinks/>
            <div className='w-11/12 mx-auto grid grid-cols-5 gap-5 my-10'>
                <div className='mx-auto col-span-5 text-center lg:text-left lg:col-span-1'><LeftSidebar/></div>
                <div className='col-span-5 lg:col-span-3'><Outlet/></div>
                <div className='hidden lg:block'><RightSidebar/></div>
            </div>
            
        </div>
    );
};

export default Home;