import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Logo from "../../Assets/Images/logo.jpeg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <figure>
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
      </figure>
      <nav class="menu">
        <Navigation />
        <MobileNavigation />
      </nav>
    </header>
  );
};

export default Header; 
