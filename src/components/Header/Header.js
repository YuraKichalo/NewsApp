import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import NavBar from "../NavBar/NavBar";
import Button from "../../common/components/Button/Button";
import './Header.css';

const Header = ({ isAuth, setAuth }) => {

    const logout = () => {
        setAuth(false)
    };

    return (
        <div className='header-main'>
            <NavLink to='/home'>
                <h2 className="ui header">
                    <i className="paper plane icon"></i>
                    <div className="content">News App</div>
                </h2>
            </NavLink>
            <div className='header-left-side'>
                <NavBar/>
                {isAuth ? (
                    <Button onLogout={logout} size='tiny' color='secondary'>Logout</Button>
                ) : (
                    <NavLink to='/login'>
                        <Button size='tiny' color='secondary'>Login</Button>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

Header.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    setAuth: PropTypes.func.isRequired
};

export default Header;