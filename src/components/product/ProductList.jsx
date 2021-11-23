import React from 'react'
import styled from "styled-components";
import Product from './Product';

const ProductList = (props) => {
    return (
      <Cont>
        {props.products && props.products.map((product) => (
          <Product product={product} key={product.id} onAddToCart={props.onAddToCart}/>
        ))}

           
          
     
        </Cont>
    )
}

const Cont = styled.div`
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
`;

export default ProductList
