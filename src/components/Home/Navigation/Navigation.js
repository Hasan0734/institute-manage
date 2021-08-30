import React, { useState } from "react";
import lightLogo from "../../../image/du-logo-light.png";
import darkLogo from "../../../image/du-logo.png";
import "./Navigation.css";
const Navigation = () => {
  const [navScroll, setNavScroll] = useState(false);

  const changeNave = () => {
    if(window.scrollY === 100){
      setNavScroll(true);
    }else{
      setNavScroll(false);
    }
  }
  window.addEventListener("scroll", changeNave);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light  ${navScroll && "bg-light"}`}>
        <div className="container">
          <a className="navbar-brand" href="#home">
          {
            navScroll ?   <img className="img-fluid" width="250px" src={darkLogo} alt="" /> 
           : <img className="img-fluid" width="250px" src={lightLogo} alt="" />
          }
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-between">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ACADEMICS
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ADMINISTRATION
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  STUDENT
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  REARCH
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LINK
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      
      </nav>
      {/* <div className="about-drop">

         <AboutDropdown ></AboutDropdown>
      </div> */}
     
    </div>
  );
};

export default Navigation;
