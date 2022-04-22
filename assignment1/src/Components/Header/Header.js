import React from "react";
import "./Header.scss";
import Logo from "../../Assets/Images/logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <figure>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </figure>
      <nav class="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="./Blogs/blogspage.html">Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header__toggle">
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
