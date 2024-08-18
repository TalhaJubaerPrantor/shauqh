import{ useState } from 'react';
import './Navbar.css'
import { FaAlignCenter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Dropdown from './Dropdown';
const Navbar = () => {

        const [burgerClicked,isBurgerClicked]=useState(false);

        function btnClick(){
            isBurgerClicked(!burgerClicked)
            console.log(burgerClicked)
        }

    return (
        <div className='navbar-container'>
            {/* Logo */}
            <div className='logo'>
            <h1 style={{textAlign:'center'}}>Logo</h1>
            </div>

            <div id='burger' className={`navbar-items ${burgerClicked?'sml-navbar-item':''}`} >
                <Link className='home' style={{marginBottom:"10px"}} to="/">Home</Link>
                <Link className='home' style={{marginBottom:"10px"}} to="/trendings">Trendings</Link>
                <Link className='home' style={{marginBottom:"10px"}} to="/men">Men</Link>
                <Link className='home' style={{marginBottom:"10px"}} to="/women">Women</Link>
                {/* <Link className='home' style={{marginBottom:"10px"}} to="/support">Support</Link> */}
                    {/* <Dropdown/> */}
                    {/* <Dropdown/> */}
                    {/* <Dropdown/> */}
            </div>
            {/* extra element */}
            <div className='sign-log'>
            <Link style={{color:"Black"}} to="/signup">SignUp</Link>/
            <Link style={{color:"Black"}} to="/login">LogIn</Link>
            </div>
            <div  className='burger' style={{textAlign:"center"}}>
            
            <FaAlignCenter onClick={btnClick} className='burgerIcon'/>
            </div>
        
        </div>
    );
};

export default Navbar;