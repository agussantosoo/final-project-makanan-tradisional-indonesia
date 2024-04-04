import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ jns, isChecked, handleCheckboxChange }) {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold" href="#">
          MAKANAN INDONESIA
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse div-navbar"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className={jns === "/" ? "nav-link active" : "nav-link"}
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/menu"
                className={jns === "/menu" ? "nav-link active" : "nav-link"}
                aria-current="page"
                href="#"
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={jns === "/contact" ? "nav-link active" : "nav-link"}
                aria-current="page"
                href="#"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item nav-link">
              <div className="form-check form-switch custom-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
