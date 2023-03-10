import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SearchIconSvg, CartSvg, ChatBoxSvg, EclipseSvg } from "./Svgs";

function Header() {
  const [sideMenu, setSideMenu] = useState(false);
  const cartItemInState = useSelector(state => state.products);

  const handleSideMenu = () => {
    setSideMenu(currentValue => !currentValue);
  }

  return <>
  <div>
    <nav>
      <div className="line-container" onClick={handleSideMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
      </div>
      {/* <input type="checkbox" className="navlink-checker"/> */}
      <h1 className="logo logo-large-screen"> <a href="/">ARTSY.</a></h1>
      <div className={`nav-links ${sideMenu ? "nav-link-active" : ""}`} onClick={handleSideMenu}>
        <div className="nav-links-header">
          <h1 className="logo"><a href="/">ARTSY.</a></h1>
          <div className="sideline-container">
            <span className="sideline"></span>
            <span className="sideline"></span>
          </div>
        </div> 
        <ul>
          <li>
            <NavLink className={ ({isActive}) => (isActive ? "active-nav" : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={ ({isActive}) => (isActive ? "active-nav" : "")}
              to={"/marketplace"}
            >
              Marketplace
            </NavLink>
          </li>
          <li>
            <NavLink className={ ({isActive}) => (isActive ? "active-nav" : "")}
              to={"/auctions"}
            >
              Auctions
            </NavLink>
          </li>
          <li>
            <NavLink className={ ({isActive}) => (isActive ? "active-nav" : "")}
              to={"/drops"}
            >
              Drops
            </NavLink>
          </li>
        </ul>
        <div className="nav-links-chat">
          <ChatBoxSvg/>
        </div>
        
      </div>
      {/* <div className="hamburger"></div> */}
      <h1 className="logo"><a href="/">ARTSY.</a></h1>
      <div className="nav-icons">
        <div><SearchIconSvg/></div>
        <div className="cart-icon-container">
          <a href="/checkout"><CartSvg/></a>
          {cartItemInState.length > 0 ? <EclipseSvg/> : ""}
        </div>
      </div>
    </nav>
  </div>
  </> 
}

export default Header;