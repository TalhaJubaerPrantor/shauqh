import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ProductDet from "./Components/Products/ProductDet/ProductDet";



const App = () => {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/productdetails' element={<ProductDet/>}></Route>
        </Routes>
  
    </div>
  );
};

export default App;