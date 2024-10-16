import React from 'react';
import "./Category.css"

const Category = () => {
    return (
        <div className='category-container'>
            <a href="" className='category' style={{background:"#ff01a5"}}>
            <div  style={{background:"#ff01a5",color:"white"}}><h1>WOMEN</h1></div>
            </a>
            <a  href=""  className='category' style={{background:"purple"}}>
            <div ><h1>MEN</h1></div>
            </a>
        </div>
    );
};

export default Category;