import React, { useState } from 'react';
import './ProductDetails.css'
import Navigation from '../NavigationBar/Navigation'
import { useLocation } from 'react-router-dom';

const ProductDetails = (props) => {
    
    const location=useLocation()
    const [product,setProducts]=useState(location.state)
  
    return (
        <div>
            <Navigation></Navigation>


        <div className='product-det'>

            <div style={{marginLeft:"auto",marginRight:"auto"}}>
                <img style={{height:"350px"}} src={product.image} alt="" />
                
            </div>

            <div>
                <h1>{product.title}</h1><br />
                <h3>{product.price} BDT</h3>
                <button className='btn btn-success'>Buy </button> &#160;
                <button className='btn btn-success'> Add to cart</button>
            </div>



        </div>







        </div>
    );
};

export default ProductDetails;