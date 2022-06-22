import { faKey, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './HeaderTop.css';
const HeaderTop = () => {
    return (
       <React.Fragment>
         <div className="top-header-area d-none d-lg-block">
            <div className="container container-sm">
                <ul className="links list-unstyled d-flex justify-content-end m-0">
                    <li><a className="btn btn-warning me-3 " href="#Home"><FontAwesomeIcon icon={faKey} /> Du Login</a></li>
                    <li><a className="btn btn-warning me-3  " href="#Home"><FontAwesomeIcon icon={faKey} /> Student Login</a></li>
                    <li><a className="btn btn-warning  " href="#Home"><FontAwesomeIcon icon={faSearchPlus} /> Find Program</a></li>
                </ul>
            </div>
        </div>
       </React.Fragment>


    );
};

export default HeaderTop;