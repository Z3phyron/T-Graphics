import React from "react";
import styled from "styled-components";

const ProductDetails = () => {
  return (
    <Cont>
      <Image></Image>
      <Details>
        <div className="product_info">
          <h4 className="name">product name</h4>
          <p className="price">$00.0</p>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, unde
            alias voluptate animi voluptas dicta, voluptates quos illum veniam
            sapiente, illo quidem sequi dolorum vero. Quos eum eveniet
            distinctio accusantium!
          </p>
        </div>
        <button className="cart_btn">
          <AddShoppingCart />
        </button>
      </Details>
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
`;
const Image = styled.div`
  display: flex;
`;
const Details = styled.div`
  display: flex;
`;

export default ProductDetails;
