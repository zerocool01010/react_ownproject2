import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return <>
    <button><Link to='/flex'>Redirigir a Flex</Link></button>
    <button><Link to='/grid'>Redirigir a Grid</Link></button>
    </>;
}

export default Home;
