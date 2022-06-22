import React from 'react';
import menuData from './menuData';
import './StudentsMenu.css';
const StudentsMenu = () => {
    return (
        <React.Fragment>
            <div className="row">
               {menuData.map((data, i ) => <div key={i} 
               
               className={`col-menu col-md-4 ps-4 ${menuData.length !== i+1  ? "border-end": ""}`}>

               <p className="menu_title">{data.title}</p>
                    <ul className="list-unstyled">
                        {data.items.map((item, index ) => <li key={index} className="menu_link">
                            <a className="menu_link" href={item.url}>
                            <i class="fas fa-angle-double-right me-1"></i>
                                {item.title}
                                </a>
                        </li>)}
                    </ul>
                </div>)}
            </div>
        </React.Fragment>
    );
};

export default StudentsMenu