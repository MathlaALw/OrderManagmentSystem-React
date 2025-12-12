import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar-nav">
      <a className="nav-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a className="nav-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-facebook"></i>
      </a>
      <a className="nav-link" href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-tiktok"></i>
      </a>
      <a className="nav-link" href="https://x.com/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a className="nav-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a className="nav-link" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-youtube"></i>
      </a>
    </div>
  );
};

export default Nav;
