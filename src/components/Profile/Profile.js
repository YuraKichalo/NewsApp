import React from "react";
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import './Profile.css';
import Status from "./Status/Status";
import {appRoutes} from "../../common/constants/routs";

const Profile = ({ isAuth }) => {

    if (!isAuth) {
        return <Redirect to={appRoutes.login} />
    }

    return (
        <div className='profile'>
            <h1>My Profile</h1>
            <div className='user-info-wrapper'>
                <h3>Admin</h3>
                <Status />
                <div className='img-wrapper'>
                    <img src='https://avatanplus.com/files/resources/original/5c433a7c08d04168669c7484.png' alt='user-avatar' />
                </div>
            </div>
        </div>
    );
};

Profile.propTypes = {
    isAuth: PropTypes.bool.isRequired
}

export default Profile;