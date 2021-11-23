import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import styled from "styled-components";
import Shop from "./pages/shop/Shop";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Cart from "./pages/cart/Cart";

import { commerce } from "./lib/Commerce";

function App() {
const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)

  return (
    <div className="App">
      <Navbar />
      <Cont>
        <Routes>
          <Route exact path="/" element={<Home products={products} />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/Shop" element={<Shop products={products}/>} />
          <Route exact path="/Contact" element={<Contact/>} />
          <Route exact path="/Cart" element={<Cart/>} />
        </Routes>
      </Cont>
      <Footer/>
    </div>
  );
}

const Cont = styled.div`
padding-top: 15vh;

`;

export default App;
