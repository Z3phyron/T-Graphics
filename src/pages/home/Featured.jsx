import React from 'react'
import styled from "styled-components";
import ProductList from '../../components/product/ProductList';

const Featured = ({products}) => {
    return (
        <Cont>
            <div className="heading">
                Featured Products
            </div>
            <ProductList products={ products}/>
        </Cont>
    )
}

const Cont = styled.div`
  padding: 5% 0;

  .heading {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 500;
  }

  @media (max-width: 900px) {
      padding: 5% 2%;
  }
`;

export default Featured
