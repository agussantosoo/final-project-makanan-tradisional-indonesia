import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer className="py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/menu" className="nav-link px-2 text-muted">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
        </ul>
        <p className="text-center text-muted fw-bold">
          © 2024 Makanan Indonesia
        </p>
      </footer>
    </div>
  );
}
