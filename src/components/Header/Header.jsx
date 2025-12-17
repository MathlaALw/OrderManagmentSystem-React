import "./Header.css";
import Nav from "./Nav/Nav";
import logo from "../../Img/LOGO/freshcart-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container justify-content-between">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav gap-2">
            <Nav />

            <div className="navbar-nav">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
              <Link className="nav-link" to="/Register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
