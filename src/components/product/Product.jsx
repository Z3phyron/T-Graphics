import React from "react";
import { CgShoppingBag } from "react-icons/cg";
import styled from "styled-components";

const Product = (props) => {

  const {product, onAddToCart} = props



  return (
    <Cont>
      <Image><img src={props.product.image.url} alt={props.product.name} /></Image>
      <Details>
        <div className="product_info">
          <h4 className="name">{ props.product.name}</h4>
          <span className="price">{ props.product.price.formatted_with_symbol}</span>
        </div>
        <button className="cart_btn" onClick={() => onAddToCart(product.id, 1) }>
          <CgShoppingBag/>
        </button>
      </Details>
    </Cont>
  );
};

const Cont = styled.div`
  width: 200px;
  border-radius: 10px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  background: var(--Color-1);

  @media (max-width: 500px) {
    width: 165px;
    border-radius: 5px;
  }
`;
const Image = styled.div`
  width: 100%;
  object-fit: cover;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .product_info {
    .name {
      margin-bottom: 10px;
      font-size: 12px;
    }

    .price {
      font-size: 10px;
      font-weight: 100px;
    }

    @media (max-width: 500px) {
      .name {
        margin-bottom: 10px;
        font-size: 15px;
      }

      .price {
        font-size: 10px;
        font-weight: 100px;
      }
    }
  }

  .cart_btn {
    font-size: 16px;
    outline: none;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: none;
    background: var(--Color-5);
    color: var(--Color-2);
    @media (max-width: 500px) {
      font-size: 15px;
      width: 30px;
      height: 30px;
    }
  }
`;

export default Product;
