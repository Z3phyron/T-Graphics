import React from "react";
import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";

import { Link, useLocation } from "react-router-dom";

const SignedIn = (props) => {
  const location = useLocation();
  // props.signOut()
  const { toggle, totalItems } = props;
  return (
    <Links className={toggle ? "active" : ""}>
      <LinkItem>
        <Link to="/shop">Shop</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/contact">Contact</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/signIn">Account</Link>
      </LinkItem>

      {location.pathname !== "/cart" && (
        <LinkItem>
          <Link to="/cart" className="cart">
            {totalItems >=0 && <div className="count">{totalItems}</div>}

            <BsCart4 />
          </Link>
        </LinkItem>
      )}
    </Links>
  );
};

const Links = styled.ul`
  @media (max-width: 900px) {
    padding: 20px;
    position: absolute;
    top: 10vh;
    right: 0;
    display: none;
    background: var(--c1);
    color: var(--c);
    transition: all 2s;

    &.active {
      display: block;
      transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
      transform: scale(0);
      animation-name: showIn;
      animation-duration: 0.3s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-fill-mode: both;
      animation-delay: 0.2s;

      @keyframes showIn {
        0% {
          transform: scale(0);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;

const LinkItem = styled.li`
  display: inline-block;
  margin-left: 40px;
  a {
    color: var(--Color-3);
  }

  .cart {
    background: var(--Color-1);
    width: 40px;
    font-size: 20px;
    height: 40px;
    color: var(--Color-2);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    position: relative;

    .count {
      position: absolute;
      top: -10px;
      right: -10px;
      background: red;
      border-radius: 50px;
      z-index: 3;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 900px) {
    display: block;
    margin: 20px 0;
    transition: all 0.5s cubic-bezier(0.88, 0.19, 0.37, 1.11);
    transform: scale(0);
    animation-name: showIn;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: both;
    animation-delay: 0.2s;

    @keyframes showIn {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export default SignedIn;
