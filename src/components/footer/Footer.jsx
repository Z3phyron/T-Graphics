import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Footer = () => {
    return (
      <Cont>
        <Logo>
          <Link to="/">T-Graphics</Link>
        </Logo>
        <Links>
          <h3 className="heading">External Links</h3>
          <ul className="links">
            <li className="link">
              <Link to="/contact">Custom Design</Link>
            </li>
            <li className="link">
              <Link to="/shop">Shop</Link>
            </li>
            {/* <li className="link">
                      <Link to='/shop' >Shop</Link>
                    </li> */}
          </ul>
        </Links>
        <SocialLinks>
          <h3 className="heading">Contact Us</h3>
        </SocialLinks>
      </Cont>
    );
}

const Cont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  background: #000;
  color: var(--Color-1);
  padding: 5% 8%;
  
 margin-bottom: -200px;
  /* left: 0;
  bottom: 0;
  width: 100%; */

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Logo = styled.div`
  a {
    color: var(--Color-1);
    transition: all 0.5s;

    &:hover {
      color: var(--Color-2);
    }
  }
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;

  a {
    color: var(--Color-4);
    transition: all .5s;

    &:hover {
      color: var(--Color-2);
    }
  }

  .links {

    li {
      margin-bottom: 10px;
    }
  }

`;
const SocialLinks = styled.div`
  display: flex;

`;

export default Footer
