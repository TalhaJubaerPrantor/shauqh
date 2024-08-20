import './Home.css'
import React from 'react';
import Navigation from "../NavigationBar/Navigation";
import Carousel from '../Carousel/Carousel';
import Product from '../Product/Product';







const Home = () => {
    return (
        <div>
        <Navigation></Navigation>
        <Carousel></Carousel>
        <Product></Product>
        </div>
    );
};

export default Home;