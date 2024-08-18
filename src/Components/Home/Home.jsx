import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousels/Carousel';

import './Home.css'
import React from 'react';
import Products from '../Products/Products';
import Collections from '../Collections/Collections';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <div>
            <Navbar/>
      <Carousel/>
      <Products/>
      <Collections/>
      <Footer/>
        </div>
    );
};

export default Home;