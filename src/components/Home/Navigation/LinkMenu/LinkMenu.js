import React from 'react';
import menuData from './menuData';
import './LinkMenu.css';

const LinkMenu = () => {

    return (
        <React.Fragment>
            <div>
                <ul className="list-unstyled">
                    {menuData.map((item, index) => <li key={index} className="menu_link">
                        <a className="menu_link" href={item.url}>
                            <i className="fas fa-angle-double-right me-1"></i>
                            {item.title}
                        </a>
                    </li>)}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default LinkMenu;