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
                        <h1 style={{textAlign:"center"}}>{product.name}</h1>
                        <div style={{display:"grid",gridTemplateColumns:"40% 60%"}}>
                            
                            
                            <span>
                                <h3>MRP : {product.price} BDT</h3>
                                <br/>
                                <a className='buy-now' href="/">Buy Now</a>
                            </span>
                            
                            
                            <span>
                            <h4></h4>
                            <span style={{color:"orangered"}}>Top Notes:</span><span style={{color:"purple"}}>{product.top}</span><br /><br />
                            <span style={{color:"orangered"}}>Heart Notes:</span><span style={{color:"purple"}}>{product.heart}</span><br /><br />
                            <span style={{color:"orangered"}}>Base Notes:</span><span style={{color:"purple"}}>{product.base}</span>
                            </span>
                        
                        
                        </div>
                        
                        
                    </div>
                  ))  
            }
                </div>
        </div>
    );
};

export default Mid;