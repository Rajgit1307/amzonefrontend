import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Home from './conponents/Home';
import Shirts from './conponents/subheader_options/Shirts';
import Pants from './conponents/subheader_options/Pants';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Subheader from './conponents/Subheader';
import Header from './conponents/Header';
import Product from './conponents/Product';
import Cart from './conponents/cartpage/Cart';

// import { isCompositeComponentWithType } from 'react-dom/test-utils';

function App() {
  
  let [inputstate,setinputstate] = useState('sample');
  let [cart,setcart] = useState([]);

  function addtocart(product){
    let productincart = cart.find((ele) => ele.id === product.id);

    if(productincart){
      setcart(cart.map((ele) => ele.id===product.id ? {...productincart,quantity:productincart.quantity+1} : ele))
    }
    else{
      setcart([...cart,{...product,quantity:1}])
    }
  }

  return(
    <>
      <BrowserRouter>
      <Header setinputstate = {{setinputstate,cart}}/>
      <Subheader/>
      <Routes>
        <Route path="/" element={<Product inputstate = {{inputstate,addtocart}}/>}/>
        <Route path="/shirts" element={<Shirts />}/>
        <Route path="/pants" element={<Pants/>}/>
        <Route path="/cartpage" element={<Cart cart = {{cart,addtocart}}/>}/>
          
        
      </Routes>
    </BrowserRouter>
      {/* <Home/> */}
      
      
      
    </>
  );
}

export default App;
