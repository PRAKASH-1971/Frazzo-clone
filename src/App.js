import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from "./components/Home";
import Guest from "./components/Guest";
import Credit from "./components/Credit";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/myaccount/orders' element={<Guest/>}/>
           <Route path='/myaccount/credits' element={<Credit/>}/>
           <Route path='/myaccount/cart' element={<Cart/>}/>
           <Route path='/products' element={<Products/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
