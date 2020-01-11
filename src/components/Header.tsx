import React from 'react';
import { NavLink } from 'react-router-dom';
const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="content-container">
                <div className="header-items">
                    <NavLink className="header-title" to="/">YWK</NavLink>
                    <NavLink className="header-item" to="help">Help</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;