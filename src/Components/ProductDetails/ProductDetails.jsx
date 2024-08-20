import React, { useState } from 'react';
import './ProductDetails.css'
import Navigation from '../NavigationBar/Navigation'
import { useLocation } from 'react-router-dom';

const ProductDetails = (props) => {
    
    const location=useLocation()
    const [product,setProducts]=useState(location.state)

    let [counter,setCounter]=useState(1)
    const increment=()=>{
        
        if(counter<10){
            setCounter(counter+1)
        }
    }
    const decrement=()=>{
        
        if(counter>1){
            setCounter(counter-1)
        }
    }

    

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
                <br />
                 <button onClick={decrement} className='btn btn-danger'>-</button>&#160;&#160;&#160; {counter} &#160;&#160;&#160;<button onClick={increment} className='btn btn-success'>+</button><br /><br />
                <button className='btn btn-primary'>Buy </button> &#160;
                <button className='btn btn-primary'> Add to cart</button>
            </div>



        </div>







        </div>
    );
};

export default ProductDetails;