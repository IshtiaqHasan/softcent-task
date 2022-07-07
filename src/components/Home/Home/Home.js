import React from 'react';
import About from '../About/About';
import Customers from '../Customres/Customers';
import Heading from '../Heading/Heading';
import Packages from '../Packages/Packages';
import Portfolio from '../Portfolio/Portfolio';
import Products from '../Products/Products';
import Works from '../Works/Works';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Heading></Heading>
            <Customers></Customers>
            <Works></Works>
            <Products></Products>
            <Packages></Packages>
            <About></About>
            <Portfolio></Portfolio>
        </div>
    );
};

export default Home;