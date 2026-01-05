import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/OIP.jpeg";
import cart from "../../assets/cart.logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
const Navbar = () => {
  const [menue, setmenue] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Shopify</p>
      </div>
      <ul className="nav-menue">
        <li
          onClick={() => {
            setmenue("home");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/home">
            Home
          </Link>{" "}
          {menue === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenue("men");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/men">
            Men
          </Link>
          {menue === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenue("women");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#626262" }}
            to="/women"
          >
            Women
          </Link>
          {menue === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenue("kid");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kid">
            Kid
          </Link>
          {menue === "kid" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="" height="40px" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

