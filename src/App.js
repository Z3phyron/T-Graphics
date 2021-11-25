import React, { useState, useEffect } from "react";
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
import Checkout from "./pages/checkout/Checkout";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items} />
      <Cont>
        <Routes>
          <Route exact path="/" element={<Home products={products} />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/signIn" element={<SignIn />} />
          <Route
            exact
            path="/shop"
            element={<Shop products={products} onAddToCart={handleAddToCart} />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            exact
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                order={order}
                onCaptureCheckout={handleCaptureCheckout}
                error={errorMessage}
              />
            }
          />
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
        </Routes>
      </Cont>
      <Footer />
    </div>
  );
}

const Cont = styled.div`
  padding-top: 15vh;
`;

export default App;
