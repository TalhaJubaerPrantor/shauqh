import React, { useEffect, useState } from 'react';
import Navigation from '../NavigationBar/Navigation'
import './Fetured.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Fetured = () => {
    const [products,setProducts]=useState([])

     useEffect(()=>{
       fetch("https://fakestoreapi.com/products")
       .then(res=>res.json())
       .then(data=>setProducts(data))
     },[])
    return (
        <div>
            <Navigation/>

            <div className='product-container'>

            {
                products.map(product=>(

                <Link  to="/productdetails" state={product} key={product.id} className="card" style={{width:"18rem"}}>
                <img src={product.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price} BDT</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
                </div>
                </Link>
                ))
            
            }

            </div>
            <Footer/>
        </div>
    );
};

export default Fetured;