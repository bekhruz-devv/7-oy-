import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../css/Navbar.css";
import Home from "../pages/Home";

const Navbar = () => {
  return (
    <div>
      <nav className="header">
        <Link to="/" className="logo">
          ⚡ MyShop
        </Link>
        <ul className="nav-links">
          {["Home", "About", "Products", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
