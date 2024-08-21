import React, { useEffect, useState } from 'react';
import './Cart.css'
import Navigation from '../NavigationBar/Navigation'
import Footer from '../Footer/Footer';

const Cart = () => {

    const [products,setProducts]=useState([])

     useEffect(()=>{
       fetch("https://fakestoreapi.com/products")
       .then(res=>res.json())
       .then(data=>setProducts(data))
     },[])
    return (
        <div>
            <Navigation/>
            

            <div className='cart'>




            {
                products.map(product=>(
                    <ul  class="list-group"><br />
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                {product.title}
                            <span style={{background:"#0d6efd"}} class="badge badge-primary badge-pill">{product.id}</span>
                        </li>
                    </ul> 
                    
                ))
            
            }

            


            </div>


            <Footer/>
        </div>
    );
};

export default Cart;