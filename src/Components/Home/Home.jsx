import React, { useEffect, useState } from 'react';
import StarryNight from '../50ml/StarryNight/StarryNight';
import "./Home.css"
import Navbar from '../Navbar/Navbar';
import TextWave from '../TextWave/TextWave';

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
                    <img style={{height:"700px", width:"700px",userSelect:"none",transform:"scaleX(-1)"}} src="/pic/pic-top.png" alt="" />
                </div>
           
            <div className='middle'>
               <div className='mid'> 
                <h2>
                    Get Your
                </h2>
                <h2>
                    Get Your
                </h2>
               </div>
<br /><br />
               <div className='mid1'> 
                <h2>
                    SIGNETURE
                </h2>
                <h2>
                    SIGNETURE
                </h2>
                </div>
<br /><br />

                <div className='mid2'> 
                <h2>
                    PERFUME
                </h2>
                <h2>
                    PERFUME
                </h2>
                </div>
<br /><br />

                <div className='mid3'> 
                <h2>
                    NOW
                </h2>
                <h2>
                    NOW
                </h2>
                </div>

              
            </div>
            <div className='left'> 
                <StarryNight></StarryNight>
            </div>
        </div>

        <div>
            
        {/* <TextWave/> */}
            
        </div>

        </div>
    );
};

export default Home;