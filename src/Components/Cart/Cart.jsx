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
                    <ul  className="list-group"><br />
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                {product.title}
                            <span ><span style={{background:"#0d6efd"}} className="badge badge-primary badge-pill">{product.id}</span> <button className='btn btn-danger'>Delete</button></span>
                        </li>
                    </ul> 
                    
                ))
            }

            <div className='cheakout'>
                <div>
                    Total Price:152154
                </div>
                <div>
                    <button className='btn btn-success'>Cheak Out</button>
                </div>
            </div>


            </div>


            <Footer/>
        </div>
    );
};

export default Cart;