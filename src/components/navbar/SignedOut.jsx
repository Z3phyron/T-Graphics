import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";

const SignedOut = ({ toggle }) => {
  return (
    <Links className={toggle ? "active" : ""}>
      <LinkItem>
        <Link to="/shop">Shop</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/contact">Contact</Link>
      </LinkItem>
      <LinkItem>
        <Link to="/signIn">Sign In</Link>
      </LinkItem>

      <LinkItem>
        <Link to="/signUp" className="signUp">
          Sign Up
        </Link>
      </LinkItem>
    </Links>
  );
};

const Links = styled.ul`
  align-items: center;

  @media (max-width: 900px) {
    padding: 20px;
    position: absolute;
    top: 10vh;
    right: 0;
    height: auto;
    display: none;
    background: var(--Color-2);
    color: var(--Color-1);
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

  .signUp {
    background: var(--Color-2);
    padding: 10px 17px;
    color: var(--Color-1);
    border-radius: 5px;
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

// @media (max-width: 900px) {

// }

export default SignedOut;
