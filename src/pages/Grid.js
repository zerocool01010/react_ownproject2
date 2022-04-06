import React from 'react';
import Header from '../gridComps/gridHeader';
import Nav from '../gridComps/gridNav';
import NewsSection from '../gridComps/gridNews';
import Sidebar from '../gridComps/gridSidebar';

const Grid = () => {

    return <div className='containerGrid'>
        <Header></Header>
        <Nav />
        <NewsSection />
        <Sidebar />
    </div>;

}

export default Grid;