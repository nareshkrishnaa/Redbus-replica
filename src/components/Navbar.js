import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <header className="d-block">
      <section id="navbar">
        <nav className="navbar fixed-top navbar-expand-lg bg-primary">
          <div className="container">
            <div className="d-flex align-items-center">
              <a className="navbar-brand text-white" href="#">
                <i class="bi bi-bus-front-fill fs-1"></i>
              </a>
              <div>
                <h1 className="display-5 fw-bold text-white pt-3">Redbus</h1>
              </div>
            </div>

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
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
                <li className="nav-item pt-2">
                  <button
                    type="button"
                    id="book-tickets"
                    className="btn btn-outline-primary border border-3 border-white text-white pb-0"
                  >
                    <i class="bi bi-ticket-detailed fs-1"></i>
                    {/* <i className="fa-solid fa-ticket fa-2x"></i> */}
                    <h5 className="fw-bold">Book tickets</h5>
                  </button>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                <li className="nav-item">
                  <a className="nav-link text-white d-flex gap-2" href="#">
                    <i className="fa-solid fa-headset fa-2x"></i>
                    <h3>Help</h3>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white d-flex gap-2"
                    role="button"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-label="Account"
                  >
                    <i className="fa-regular fa-user fa-2x"></i>
                    <h3>Account</h3>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Cancel ticket
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Change Travel date
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Change My ticket
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Email / SMS
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Login / Sign up
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </header>
  );
}

export default Navbar;
