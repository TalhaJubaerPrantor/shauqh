import React, { useEffect, useState } from 'react';
import StarryNight from '../50ml/StarryNight/StarryNight';
import "./Home.css"
import Navbar from '../Navbar/Navbar';
import Mid from './Products/Products';
import Category from './Category/Category';

const Home = () => {

    let [scrollValue,setScrollValue]=useState(false)

    const handleScroll=()=>{
            if(window.scrollY>200){
                setScrollValue(true)
            }else{
                setScrollValue(false)
            }
        }


        const topAnimation=()=>{
            if(scrollValue==true){
                const animation={

                }
            }
        }

    window.addEventListener("scroll",handleScroll,topAnimation);

    return (
        <div onScroll={handleScroll}>
            <Navbar/>
            <div className='top-banner'>
                <div className="right" >
                    <img className='top-img' src="/pic/pic-top.png" alt="" />
                </div>
           
            <div className='middle'>
                <h1>GET YOUR SIGNETURE PERFUME NOW</h1>
                <h3><span style={{color:"red"}}>30%OFF</span> Ongoing</h3>
            </div>
            <div className='left'> 
                <StarryNight></StarryNight>
            </div>
        </div>

        <div>
            <br /><br />
            <Category/>
        </div>


        <div>
            
       <Mid/>
        </div>

        </div>
    );
};

export default Home;