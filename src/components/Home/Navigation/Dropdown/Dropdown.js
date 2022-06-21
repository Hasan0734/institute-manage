import React from 'react';
import './Dropdown.css';

const Dropdown = ({children}) => {
    return (
       <React.Fragment>
         <div className="nav_dropdown">
            {children}
        </div>
       </React.Fragment>
    );
};

export default Dropdown;