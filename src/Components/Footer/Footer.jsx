import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer-container">
            <br /><br />
                <p style={{fontSize:"30px", textAlign:"center",background:"black"}}>Copyright All Rights Reserved</p>
                <p style={{fontSize:"28px", textAlign:"center",background:"black"}}>Created and maintained by <span style={{color:"red",background:"black"}}>TJP</span> </p>
                <br />
        </div>
    );
};

export default Footer;