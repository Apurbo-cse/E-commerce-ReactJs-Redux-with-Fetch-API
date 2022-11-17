import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4" href="#">
            Yoo Shop
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div class="buttons">
              <a href="" class="btn btn-outline-dark">
                <i class="fa fa-sign-in me-1" aria-hidden="true"></i> Login
              </a>
              <a href="" class="btn btn-outline-dark ms-2">
                <i class="fa fa-user-plus me-1" aria-hidden="true"></i> Signup
              </a>
              <a href="" class="btn btn-outline-dark ms-2">
                <i class="fa fa-cart-plus me-1" aria-hidden="true"></i> Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
