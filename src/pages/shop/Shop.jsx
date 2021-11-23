import React from 'react'
import styled from"styled-components"
import ProductList from '../../components/product/ProductList';

const Shop = (props) => {
  
const { products, onAddToCart } = props;

    return (
        <Cont>
            <h3 className="heading">Shop</h3>
        <ProductList products={products} onAddToCart={ onAddToCart }/>
        </Cont>
    )
}

const Cont = styled.div`
  padding: 0 8% 3%;

  .heading {
    margin-bottom: 30px;
  }

  @media (max-width: 900px) {
    padding: 3% 5%;
  }
  @media (max-width: 700px) {
    padding: 5% 2%;
  }
`;

export default Shop
