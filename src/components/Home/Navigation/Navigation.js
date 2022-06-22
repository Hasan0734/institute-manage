import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import lightLogo from "../../../image/du-logo-light.png";
import darkLogo from "../../../image/du-logo.png";
import AboutMenu from "./AboutMenu/AboutMenu";
import AcademicsMenu from "./AcademicsMenu/AcademicsMenu";
import AdministrationMenu from "./AdministrationMenu/AdministrationMenu";
import Dropdown from "./Dropdown/Dropdown";
import LinkMenu from "./LinkMenu/LinkMenu";
import "./Navigation.css";
import ResearchMenu from "./ResearchMenu/ResearchMenu";
import StudentsMenu from "./StudentsMenu/StudentsMenu";


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
    <React.Fragment>
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
                <li className="nav-item active_nav ">
                  <a
                    className={` about-nav nav-link ${!navScroll ? "text-white" : "fw-bold"
                      }`}
                    href="#"

                  >
                    ABOUT <i class="fas fa-angle-down"></i>

                    <div className="about-menu dropdown_hide  container position-absolute start-0">
                      <Dropdown>
                        <AboutMenu />
                      </Dropdown>
                    </div>
                  </a>

                </li>
                <li className="nav-item active_nav">
                  <a
                    className={`nav-link academics-nav ${!navScroll && "text-white"
                      }`}
                    href="#"
                  >
                    ACADEMICS <i class="fas fa-angle-down"></i>


                    <div className="academics-menu dropdown_hide  container position-absolute start-0">
                      <Dropdown>
                        <AcademicsMenu />
                      </Dropdown>
                    </div>
                  </a>

                </li>
                <li className="nav-item active_nav">
                  <a
                    className={`nav-link administration-nav ${!navScroll && "text-white"
                      }`}
                    href="#"
               
                  >
                    ADMINISTRATION <i class="fas fa-angle-down"></i>
                    <div className="administration-nav dropdown_hide  container position-absolute start-0">
                      <Dropdown>
                        <AdministrationMenu/>
                      </Dropdown>
                    </div>
                  </a>
                </li>
                <li className="nav-item active_nav">
                  <a
                    className={`nav-link students-nav ${!navScroll && "text-white"
                      }`}
                    href="#"
                  >
                    STUDENT <i class="fas fa-angle-down"></i>
                    
                    <div className="student-menu dropdown_hide  container position-absolute start-0">
                      <Dropdown>
                        <StudentsMenu/>
                      </Dropdown>
                    </div>
                  </a>
                </li>
                <li className="nav-item active_nav">
                  <a
                    className={`nav-link research-nav ${!navScroll && "text-white"
                      }`}
                    href="#"
                   
                  >
                    RESEARCH <i class="fas fa-angle-down"></i>
                    <div className="research-menu dropdown_hide  position-absolute">
                      <Dropdown>
                        <ResearchMenu/>
                      </Dropdown>
                    </div>
                  </a>
                  
                </li>
                <li className="nav-item active_nav">
                  <a
                    className={`nav-link link-nav ${!navScroll && "text-white"
                      }`}
                    href="#"
            
                  >
                    LINK <i class="fas fa-angle-down"></i>
                    <div className="link-menu dropdown_hide  position-absolute w-25">
                      <Dropdown>
                        <LinkMenu/>
                      </Dropdown>
                    </div>
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
    </React.Fragment>
  );
};

export default Navigation;
