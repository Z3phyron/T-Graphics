import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CgClose, CgMenuMotion } from "react-icons/cg";
// import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

const Navbar = (props) => {
  const [navbar, setNavbar] = useState(false);

  const { totalItems } = props;

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Nav className={navbar ? "isActive" : ""}>
      <Logo>
        <Link to="/">T-Graphics</Link>
      </Logo>

      {/* <SignedOut toggle={toggle} /> */}
      <SignedIn toggle={toggle} totalItems={ totalItems }/>

      <Toggle onClick={handleToggle}>
        {toggle ? <CgClose /> : <CgMenuMotion />}
      </Toggle>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 3% 8%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: 0.5s;
  z-index: 999;
  &.isActive {
    background: var(--Color-1);
    height: 10vh;
    box-shadow: 0 1px 2px 1px var(--Color-4);
  }
`;

const Logo = styled.h3`
  img {
    width: 100px;
  }

  a {
    color: var(--Color-3);
  }
`;

const Toggle = styled.div`
  display: none;
  font-size: 30px;
  transition: all 2s;
  color: var(--Color-2);
  @media (max-width: 900px) {
    display: block;
    transition: all 2s;
  }
`;

export default Navbar;
