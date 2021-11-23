import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Cont>
      <Ban>Banner 1</Ban>
      <Ban>Banner 2</Ban>
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  align-items: center;
  padding: 5% 0;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 5% 2%;
  }
`;

const Ban = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  border-radius: 10px;
  background: var(--Color-2);

  @media (max-width: 900px) {
    height: 20vh;
  }

  
`;

export default Banner;
