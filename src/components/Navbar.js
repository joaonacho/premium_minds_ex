import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  const location = useLocation();

  return (
    <aside className="nav-container">
      <nav>
        <ul>
          <li>
            <Link
              className={
                location.pathname === "/about" ? "li-link-active" : "li-link"
              }
              to="/about"
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/user" ? "li-link-active" : "li-link"
              }
              to="/user"
            >
              Utilizador
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/quantum" ? "li-link-active" : "li-link"
              }
              to="/quantum"
            >
              Quantum solum
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/marcus" ? "li-link-active" : "li-link"
              }
              to="/marcus"
            >
              Marcus Tremer
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
