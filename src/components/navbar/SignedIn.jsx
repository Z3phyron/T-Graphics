import React from "react";
import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";

import { Link, useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";


import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const SignedIn = (props) => {
  const { logout, currentUser } = useAuth();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  console.log(currentUser)
  const location = useLocation();
  // props.signOut()
  const { toggle, totalItems } = props;
  return (
    <Links className={toggle ? "active" : ""}>
      <div className="overlay">

      </div>
      <LinkItem >
        <Link to="/shop">Shop</Link>
      </LinkItem>
      <LinkItem >
        <Link to="/contact">Contact</Link>
      </LinkItem>

      <LinkItem>
        <Avatar onClick={handleClick} sx={{ width: 32, height: 32 }}>
          {currentUser.auth.currentUser.displayName}
        </Avatar>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </LinkItem>

      {location.pathname !== "/cart" && (
        <LinkItem>
          <Link to="/cart" className="cart">
            {totalItems >= 0 && <div className="count">{totalItems}</div>}
            <BsCart4 />
          </Link>
        </LinkItem>
      )}
      <LinkItem
        name="Logout"
        onClick={async (e) => {
          e.preventDefault();
          await logout();
        }}
      >
        SignOut
      </LinkItem>
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

    /* .overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: var(--Color-5);
    } */

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
