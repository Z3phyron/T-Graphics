import React from "react";
import styled from "styled-components";
import CartItem from "../../components/cartItems/CartItem";

const Cart = () => {
  return (
    <Cont>
      <div className="cart_items">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </Cont>
  );
};

const Cont = styled.div`
  padding: 8%;

  @media (max-width: 900px) {
    padding: 0 5%;
  }
  @media (max-width: 900px) {
    padding: 5% 2%;
  }
  .cart_items {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;
    }
  }
`;

export default Cart;
