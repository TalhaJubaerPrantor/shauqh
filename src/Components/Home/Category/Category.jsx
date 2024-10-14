import React from 'react';
import "./Category.css"

const Category = () => {
    return (
        <div className='category-container'>

            <a href="/" style={{marginLeft:"auto",marginRight:"auto"}}>
            <div className='women'>
                <h1 style={{color:"white",fontSize:"50px"}}>Women</h1>
            </div>
            </a>

            <a href="/" style={{marginLeft:"auto",marginRight:"auto"}}>
            <div className='men'>
                <h1 style={{color:"white",fontSize:"50px"}}>Men</h1>
            </div>
            </a>
        </div>
    );
};

export default Category;