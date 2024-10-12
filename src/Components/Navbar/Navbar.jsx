import React from 'react';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
        
            <div className='nav-container'>
                <span style={{display:"block",textAlign:"center"}} className='link-container'>
                    <a className='link' href=""><img  style={{height:"70px",width:"70px"}} src="/pic/logo.png" alt="" /></a>
                </span>
                <span className='link-container'>
                    <a className='link' href="/"><b>Men</b></a>
                </span>
                <span className='link-container'>
                    <a className='link' href="/"><b> Women</b></a>
                </span>
                <span className='link-container'>
                    <a className='link' href="/"><b>Shop</b></a>
                </span>
                <span className='link-container'>
                    <a className='link' href="/"><b>Track Order</b></a>
                </span>
                <span className='link-container'>
                    <a className='link' href="/"><b>Cart</b></a>
                </span>
            </div>


        </div>
    );
};

export default Navbar;