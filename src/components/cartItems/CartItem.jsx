import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

const CartItem = (props) => {
  const { item, onUpdateQty, onRemove } = props;
    return (
      <Cont>
        <Remove onClick={() => onRemove(item.id)}>
          <CgClose />
        </Remove>
        <Image>
          <img src={item.image.url} alt={item.name} />
        </Image>
        <Details>
          <div className="product_info">
            <h4 className="name">{item.name}</h4>
            <span className="price">{item.price.formatted_with_symbol}</span>
          </div>
        </Details>
        <Buttons>
          <button className="decr" onClick={() => onUpdateQty(item.id, item.quantity - 1)}>-</button>
          <div className="qty">{item.quantity}</div>
          <button className="incr" onClick={() => onUpdateQty(item.id, item.quantity + 1)}>+</button>
        </Buttons>
        
      </Cont>
    );
};

const Cont = styled.div`
  width: 200px;
  position: relative;
  border-radius: 10px;

  /* overflow: hidden; */
  background: var(--Color-1);
  transition: all .5s;

&:hover {
    box-shadow: 0 1px 1px 1px var(--Color-4);
}

  @media (max-width: 500px) {
    width: 165px;
    border-radius: 5px;
  }
`;
const Remove = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  background: #d68d8d85;
  color: #ffffff55;
  position: absolute;
  right: -10px;
  top: -10px;
  font-size: 20px;
  align-items: center;
  border-radius: 50px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all .5s;

  &:hover {
    background: #ff2a2a;
    color: #fff;
  }

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
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
      font-size: 18px;
    }

    .price {
      font-size: 16px;
      font-weight: 100px;
    }
    @media (max-width: 500px) {
      .name {
        margin-bottom: 10px;
        font-size: 15px;
      }

      .price {
        font-size: 12px;
        font-weight: 100px;
      }
    }
  }

  .cart_btn {
    font-size: 25px;
    outline: none;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: none;
    background: var(--Color-5);
    color: var(--Color-2);
  }
`;

const Buttons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
font-size: 16px;

button {
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 4px;
  background: var(--Color-4);
}
`;

// const Button = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// padding: 20px;
// font-size: 16px;

// button {
//   width: 30px;
//   height: 30px;
//   outline: none;
//   border: none;
//   border-radius: 7px;
//   background: var(--Color-4);
// }
// `;


export default CartItem;
