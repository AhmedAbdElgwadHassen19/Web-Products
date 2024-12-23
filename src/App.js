import React from "react";
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import LogImages from './Components/LogImages';
import ProductList from './Components/ProductList';
import Wardrobe from './Pages/Wardrobe';
import Sofa from './Pages/Sofa';
import Tables from './Pages/Tables';
import Cart from "./Components/Cart";
import { useState, useEffect } from "react";



function App() {
  const [productCount , setProductCount] = useState(0)
  useEffect(()=>{
    const cartItems = JSON.parse(localStorage.getItem('cart')) || []
    setProductCount(cartItems.length)
  },[])
  return (
    <div className="App">
      <Navbar productCount = {productCount}/>
        <Routes>
          <Route path='/' element={<><LogImages/><ProductList setProductCount= {setProductCount}/></>}/>
          <Route path='/wardrobe' element={<><LogImages/> <Wardrobe setProductCount= {setProductCount}/></>}/>
          <Route path='/tables' element={<><LogImages/> <Tables setProductCount= {setProductCount}/></>}/>
          <Route path='/sofa' element={<><LogImages/> <Sofa setProductCount= {setProductCount}/></>}/>
          <Route path='/cart' element={<Cart setProductCount= {setProductCount}/>}/>
        </Routes>
    </div>
  );
}

export default App;
