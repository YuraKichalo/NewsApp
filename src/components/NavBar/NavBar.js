import React from "react";
import {NavLink} from "react-router-dom";
import './NavBar.css';
import {appRoutes} from "../../common/constants/routs";

const NavBar = () => {
    const {home, news, profile} = appRoutes;

    return (
        <nav className='nav ui list'>
            <NavLink to={home}>Home</NavLink>
            <NavLink to={news}>News</NavLink>
            <NavLink to={profile}>Profile</NavLink>
        </nav>
    );
};

export default NavBar;