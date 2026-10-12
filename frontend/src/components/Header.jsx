import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">

        <Link to="/" className="brand">
          <div className="brand-mark">
            MG
          </div>

          <div className="brand-text">
            <span className="brand-name">
              {companyInfo.name}
            </span>

            <span className="brand-subtitle">
              Construction & Infrastructure
            </span>
          </div>
        </Link>

        <nav className="main-navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/locations">Locations</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/get-quote" className="quote-button">
          Get a Quote
        </Link>

      </div>
    </header>
  );
}

export default Header;