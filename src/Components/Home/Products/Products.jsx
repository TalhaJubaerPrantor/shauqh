import React, { useEffect, useState } from 'react';
import './Products.css'

const Mid = () => {
        const [products,setProducts]=useState([])
        useEffect(()=>{
            fetch("product.json")
            .then(res=>res.json())
            .then(data=>setProducts(data))
        })

    return (
        <div >
            <br /><br />
            <div className='prod-container'>
            {
                  products.map(product=>(
                    <div className='prod'>
                        <img style={{width:"400px"}} src={product.img} st alt="" />
                        <h1>{product.name}</h1>
                        <h3>BDT:{product.price}</h3>
                        
                    </div>
                  ))  
            }
                </div>
        </div>
    );
};

export default Mid;