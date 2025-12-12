import "./Header.css";
import Nav from "./Nav/Nav";

import logo from "../../Img/LOGO/freshcart-logo.svg";



const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container justify-content-between">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav gap-2">
            <Nav />

            <div className="navbar-nav">
              <a className="nav-link" href="/login">
                Login
              </a>
              <a className="nav-link" href="/register">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
