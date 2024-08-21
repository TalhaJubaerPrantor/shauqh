import './Home.css'
import React from 'react';
import Navigation from "../NavigationBar/Navigation";
import Carousel from '../Carousel/Carousel';
import Product from '../Product/Product';
import Footer from '../Footer/Footer';







const Home = () => {
    return (
        <div>
        <Navigation></Navigation>
        <Carousel></Carousel>
        <Product></Product>
        <Footer/>
        </div>
    );
};

export default Home;