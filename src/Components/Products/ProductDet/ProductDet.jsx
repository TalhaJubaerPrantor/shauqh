import Navbar from '../../Navbar/Navbar';
import './ProductDet.css'

const ProductDet = () => {
    return (
        <div>
            <Navbar/>

            <div className='prod-det'>
                <div>
                    <img style={{height:"100%",width:"100%"}} src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div>
                    <h1>Product name</h1>
                    <br />
                    <h3>100000 bdt</h3>
                    <br />
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat voluptatem tempore quia autem quam vitae eos unde deleniti harum suscipit!</p>
                    <br />

                    <input type="number" name="" id="" /><br /><br />
                    <button>Buy now</button>
                    <button>Add to cart</button>
                </div>
            </div>



        </div>
    );
};

export default ProductDet;