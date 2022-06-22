import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import lightLogo from "../../../../image/du-logo-light.png";
import './MobileNavigation.css';

const MobileNavigation = () => {
    const [search, setSearch] = useState(false);
    return (
        <React.Fragment>
            <header style={{ position: 'relative' }} className="d-block d-lg-none">

                <nav className="`navbar navbar-expand-lg navbar-light bg-light navbar-top">
                    <div className="container position-relative ">
                        <button
                            className="navbar-toggler"
                            type="button"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <a className="navbar-brand" href="#home">
                            <img
                                className="img-fluid"
                                width="250px"
                                src={lightLogo}
                                alt=""
                            />
                        </a>
                    </div>
                </nav>


//search
                <div className="container">
                    <div className="row d-flex justify-content-end">
                        <div
                            className={`top-search-area   ${search && 'top-search-area-1'}`}

                        >
                            <div className="pb-4" >
                                <form className="text-end">
                                    <div className="text-center">
                                        <input type="radio" id="web" name="search" value="web" checked />
                                        <label className="m-2 text-white" htmlFor="web" >Web</label>
                                        <input className="m-2" type="radio" id="people" name="search" value="people" />
                                        <label className="text-white" htmlFor="people">People</label>
                                    </div>
                                    <input className="form-control" type="text" placeholder="Search" />
                                    <button className="search-btn" type="submit">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
        </React.Fragment>
    );
};

export default MobileNavigation;