import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper" id="home">
      <div className="main-info">
        <h1>Desenvolvedora Web</h1>
        <Typed
          className="typed-text"
          strings={["Desenvolvedora Web", "Fullstack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#contacts" className="btn-main-offer">
          Entre em contato
        </a>
      </div>
    </div>
  );
};

export default Header;
