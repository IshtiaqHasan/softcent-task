import React from 'react';
import About from '../About/About';
import Customers from '../Customres/Customers';
import DesignTech from '../DesignTech/DesignTech';
import DevTech from '../DevTech/DevTech';
import Heading from '../Heading/Heading';
import Packages from '../Packages/Packages';
import Portfolio from '../Portfolio/Portfolio';
import Products from '../Products/Products';
import Workflow from '../Workflow/Workflow';
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
            <DevTech></DevTech>
            <DesignTech></DesignTech>
            <Workflow></Workflow>
        </div>
    );
};

export default Home;