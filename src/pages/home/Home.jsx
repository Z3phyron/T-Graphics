import React from "react";
import Showcase from "./Showcase";
import styled from "styled-components";
import Banner from "./Banner";
import Featured from "./Featured";

const Home = ( {products}) => {
  return (
    <Cont>
          <Showcase />
      <Banner />
      <Featured products={ products }/>
    </Cont>
  );
};

const Cont = styled.div`
  padding: 0 8%;

  @media  (max-width: 900px) {
    padding: 0 5%;
  }
  @media  (max-width: 500px) {
    padding: 0;
  }
`;

export default Home;
