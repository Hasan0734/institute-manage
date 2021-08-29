import { faKey, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HeaderTop.css';
const HeaderTop = () => {
    return (
        <div className="top-header-area">
            <div className="container">
                   <ul className="links list-unstyled d-flex justify-content-end m-0"> 
                       <li><a className="btn btn-warning me-3" href="#Home"><FontAwesomeIcon icon={faKey}/> Du Login</a></li>
                       <li><a className="btn btn-warning me-3" href="#Home"><FontAwesomeIcon icon={faKey}/> Student Login</a></li>
                       <li><a className="btn btn-warning" href="#Home"><FontAwesomeIcon icon={faSearchPlus}/> Find Program</a></li>
                   </ul>
            </div>
        </div>
 
        
    );
};

export default HeaderTop;