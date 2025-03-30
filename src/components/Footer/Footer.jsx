import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} Skull King</p>
        <a
          href="https://github.com/Sk4is/gameVault"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img
            src="https://res.cloudinary.com/dimlqpphf/image/upload/v1741476495/image_mvpbwg.png"
            alt="Github Logo"
            className="github-img"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;