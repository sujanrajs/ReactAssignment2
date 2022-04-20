import React from "react";
import "./Footer.scss";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer">
      <section class="copyright">
        <p>&copy; 2022 Sujan Raj Shrestha</p>
      </section>
      <section class="socialmedia">
        <a href="#" aria-label="facebook icon">
          <FaFacebook />
        </a>
        <a href="#" aria-label="instagram icon">
          <FaInstagram />
        </a>
        <a href="#" aria-label="twitter icon">
          <FaTwitter />
        </a>
        <a href="#" aria-label="linkedin icon">
          <FaLinkedin />
        </a>
        <a href="#" aria-label="youtube icon">
          <FaYoutube />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
