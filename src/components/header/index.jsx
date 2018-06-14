import React from 'react';
import { NavLink } from 'react-router-dom';

const Header  = () => {
    return (
        <div className="header">
            <div className="container ">
                <NavLink className="col-md-2" to={"/"}>
                    <p>Logo</p>
                </NavLink>
                <div className="col-md-9 header-link-wrap">
                    <ul className="header-link">
                        <li>
                            <NavLink 
                                activeClassName={ "active" } 
                                exact={ true } 
                                to={ '/' }
                            >
                                All Movies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                activeClassName={ "active" } 
                                exact={ true } 
                                to={ '/favorites' }
                            >
                                Favorites Movies
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )    
}

export default Header;