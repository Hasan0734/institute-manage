import React from 'react';
import menuData from './menuData';
import './ResearchMenu.css';

const ResearchMenu = () => {

    return (
        <React.Fragment>
            <div>
                <ul className="list-unstyled">
                    {menuData.map((item, index) => <li key={index} className="menu_link">
                        <a className="menu_link" href={item.url}>
                            <i class="fas fa-angle-double-right me-1"></i>
                            {item.title}
                        </a>
                    </li>)}
                </ul>
            </div>
        </React.Fragment>
    );
};

export default ResearchMenu;