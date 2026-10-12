import { Link } from "react-router-dom";
import { companyInfo } from "../data/companyData";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="container footer-grid">

        <div className="footer-company">
          <h2>{companyInfo.name}</h2>

          <p>
            {companyInfo.description}
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Locations</h3>

          {companyInfo.locations.map((location) => (
            <p key={location}>{location}</p>
          ))}
        </div>

        <div>
          <h3>Contact</h3>

          <p>Phone: [Your Phone Number]</p>
          <p>Email: [Your Email Address]</p>
          <p>Office: [Your Office Address]</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;