import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from "./Components/Carousel/Carousel";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Fetured from "./Components/Feture/Fetured";
import TrackOrder from "./Components/TrackOrder/TrackOrder";
import Cart from "./Components/Cart/Cart";





const App = () => {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/productdetails" element={<ProductDetails/>}/>
            <Route path="/fetured" element={<Fetured/>}/>
            <Route path="/trackorder" element={<TrackOrder/>}/>
            <Route path="/cart" element={<Cart/>}/>

        </Routes>

        {/* <UncontrolledExample></UncontrolledExample> */}
    </div>
  );
};

export default App;