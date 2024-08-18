import { useState } from 'react';
import './Products.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {

    const [prodcts,setProducts]=useState([])

    useEffect(()=>{
        fetch("../../../../product.json")//or use "https://api.escuelajs.co/api/v1/products"
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])


    return (
        <div className='container'>
            <br /><br />
            <h1 style={{marginLeft:"5%"}}>Products</h1>
            <br />
            <div className='product-box-container'>
                {
                    prodcts.map((product)=>(
                        <Link className='product-box' to="/productdetails"  key={product.id}>
                        <img className='product-img' src={product.images[0]} alt="" />
                        <h6 style={{fontSize:"15px"}}>{product.title}</h6>
                        <h5 style={{fontSize:"15px"}}> <del>{"100"}</del> {product.price} TK</h5>                        
                        <br />
                        
                        <div className='buy-section'>
                            <Link to="/productdetails" className='buy-btn' style={{paddingLeft:"28%"}}>Buy now</Link>
                            <Link to="/productdetails" className='buy-btn' style={{paddingLeft:"15%"}}>Add to cart</Link>

                        </div>
                        
                        </Link>
                    ))
                }
            </div>
<br /><br />
        </div>
    );
};

export default Products;