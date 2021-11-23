import React from "react";
import styled from "styled-components";
import showcase from "../../images/showcase.png"

const Showcase = () => {
  return (
    <Cont>
      <Text>
        <h3 className="heading">Heading</h3>
        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error porro
          laudantium quidem neque, aliquam?
        </p>
      </Text>
      <Image>
        <p><img src={showcase} alt="" /></p>
      </Image>
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 50% auto;
  align-items: center;
  height: auto;
  padding: 2%;
  border-radius: 10px;
  background: var(--Color-2);

  @media (max-width: 500px) {
   border-radius: 0;
   grid-template-columns: 100%;
  }
`;
const Text = styled.div`
  .heading {
    font-size: 30px;
    margin-bottom: 20px;
    letter-spacing: 2px;
    font-weight: 200;
  }

  .desc {
    font-size: 20px;
    line-height: 130%;
    font-weight: 100;
  }

  @media (max-width: 900px) {
    .heading {
      font-size: 30px;
      margin-bottom: 20px;
      letter-spacing: 2px;
    }

    .desc {
      font-size: 18px;
      line-height: 130%;
    }
  }
  @media (max-width: 700px) {
    text-align: center;
    .heading {
      font-size: 30px;
      margin-bottom: 20px;
      letter-spacing: 2px;
    }

    .desc {
      font-size: 18px;
      line-height: 130%;
    }
  }
`;
const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 80%;
    margin: auto;
  }
  

  @media (max-width: 700px) {
    display: none;
  }
`;

export default Showcase;
