import React from "react";
import styled from "styled-components";
import CartItem from "../../components/cartItems/CartItem";

const Cart = (props) => {

  const { cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } = props;
  // const isEmpty = !cart.line_items.length;

  const EmptyCart = () => (
    <p className="desc">
      Oops <br />
      You have no Items in your Cart, start adding some!!!
    </p>
  )

  const FilledCart = () => (
    <div>
      <div className="cart_items">
        {cart.line_items &&
          cart.line_items.map((item) => <CartItem item={item} key={item.id} onUpdateQty={handleUpdateCartQty} onRemove={handleRemoveFromCart} onEmpty={ handleEmptyCart}/>
          )}
      </div>

      <div className="sub_total">
        <h3 className="total">Subtotal: { cart.subtotal.formatted_with_symbol}</h3>
        <div className="btn_group">
          <button className="empty" onClick={handleEmptyCart}>Empty Cart</button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );

  if(!cart.line_items) return "Loading......"

  return (
    <Cont>
      <h3 className="heading">Your Shopping Cart</h3>
      { !cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Cont>
  );
};

const Cont = styled.div`
  padding: 8%;

 .sub_total {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .btn_group {
        display: flex;

        button {
          margin-left: 20px;
          border: none;
          outline: none;
          padding: 10px 20px;
          color: #fff;
          border-radius: 4px;

          &.empty {
            background: red;
          }

          &.checkout {
            background: var(--Color-2);
          }
        }
      }
    }

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
    margin: 10vh 0;

   

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
