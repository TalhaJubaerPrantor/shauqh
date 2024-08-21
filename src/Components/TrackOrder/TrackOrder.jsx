import React from 'react';
import './TrackOrder.css'
import Navigation from '../NavigationBar/Navigation'
import Footer from '../Footer/Footer';

const TrackOrder = () => {

    const data=true

    return (
        <div>
            <Navigation/>
            
            <br />
            <div style={{marginLeft:"auto",marginRight:"auto",width:"272px"}}>
                <input placeholder='Enter Phone' type="number" name="phone"/> <button className='btn btn-success'>Track</button>
            </div>
            <br />
            <div className='track' style={{display:data?"":"none"}}>

            Order Placed
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div><br />
            Order Confirmed 
            <div className="progress">
               <div className="progress-bar bg-info" role="progressbar" style={{width: "1%"}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div><br />
            Out for Delevery 
            <div className="progress">
               <div className="progress-bar bg-warning" role="progressbar" style={{width: "1%"}}  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div><br />
            Delivired 
            <div className="progress">
               <div className="progress-bar bg-danger" role="progressbar" style={{width: "1%"}}  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>


            </div>







            <Footer/>
        </div>
    );
};

export default TrackOrder;