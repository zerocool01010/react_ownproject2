import React from 'react';
import Header from '../comps/header';
import Nav from '../comps/nav';
import NewsSection from '../comps/news';
import Sidebar from '../comps/sidebar';

const Home = () => {

    return <div className='container'>
        <Header></Header>
        <Nav />
        <NewsSection />
        <Sidebar />
    </div>;

}

export default Home;