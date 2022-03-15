import React from "react";
import "./styles.css";
import Logo from "../../assets/graphics/logo.jpg";
const Header = (props) => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoIMG" src={Logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
