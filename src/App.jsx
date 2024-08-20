import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import UncontrolledExample from "./Components/Carousel/Carousel";
import ProductDetails from "./Components/ProductDetails/ProductDetails";





const App = () => {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/productdetails" element={<ProductDetails/>}/>
        </Routes>

        {/* <UncontrolledExample></UncontrolledExample> */}
    </div>
  );
};

export default App;