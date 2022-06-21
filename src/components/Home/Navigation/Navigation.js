import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import lightLogo from "../../../image/du-logo-light.png";
import darkLogo from "../../../image/du-logo.png";
import AboutDropdown from "../AboutDropdown/AboutDropdown";
import Dropdown from "./Dropdown/Dropdown";
import "./Navigation.css";
const Navigation = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [search, setSearch] = useState(false);
  const changeNave = () => {
    const scroll = 100;
    if (scroll <= window.scrollY) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  window.addEventListener("scroll", changeNave);

  return (
    <header style={{ position: 'relative' }}>
      <nav
        className={`navbar navbar-expand-lg navbar-light   ${navScroll && "bg-light navbar-top"
          }`}
      >
        <div className="container position-relative ">
          <a className="navbar-brand" href="#home">
            <img
              className="img-fluid"
              width="250px"
              src={navScroll ? darkLogo : lightLogo}
              alt=""
            />
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
              <li className="nav-item">
                <a
                  className={`nav-link about-nav ${!navScroll ? "text-white" : ""
                    }`}
                  href="#about"
                
                >
                  ABOUT
                </a>
                <div className="about-menu dropdown_hide  container position-absolute start-0">
                  <Dropdown>
                    
                    </Dropdown>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link academics-nav ${!navScroll && "text-white"
                    }`}
                  href="#about"
            
                >
                  ACADEMICS
                </a>
                <div className="academics-menu dropdown_hide  container position-absolute start-0">
                  <Dropdown/>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${!navScroll && "text-white"
                    }`}
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ADMINISTRATION
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${!navScroll && "text-white"
                    }`}
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  STUDENT
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${!navScroll && "text-white"
                    }`}
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  RESEARCH
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${!navScroll && "text-white"
                    }`}
                  href="#about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LINK
                </a>
              </li>
              <li className="nav-item ">
                <a href="#search"
                  className={`nav-link top-search-bar ${!navScroll && "text-white"
                    }`}

                >
                  <FontAwesomeIcon onClick={(e) => { setSearch(!search) }} icon={faSearch} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row d-flex justify-content-end">
          <div
            className={`top-search-area   ${search && 'top-search-area-1'}`}
            style={{ top: `${navScroll ? "94px" : "170px"}` }}
          >
            <div className="pb-4" >
              <form className="text-end">
                <div className="text-center">
                  <input type="radio" id="web" name="search" value="web" checked />
                  <label className="m-2 text-white" for="web" >Web</label>
                  <input className="m-2" type="radio" id="people" name="search" value="people" />
                  <label className="text-white" for="people">People</label>
                </div>
                <input className="form-control" type="text" placeholder="Search" />
                <button className="search-btn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
              </form>
            </div>
          </div>
        </div>
      </div>


    </header>
  );
};

export default Navigation;
