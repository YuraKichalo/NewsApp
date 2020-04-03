import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import './Profile.css';
import Status from "./Status/Status";
import {appRoutes} from "../../common/constants/routs";
import UserInfo from "./UserInfo/UserInfo";
import WithReduxUserForm from "./UserInfoForm/UserInfoForm";

const Profile = ({ isAuth, userData, setUserData }) => {

    const [editMode, setEditMode] = useState(false);

    if (!isAuth) {
        return <Redirect to={appRoutes.login} />
    }

    const submit = formVal => {
        setUserData(formVal);
        setEditMode(false);
    };

    return (
        <div className='profile'>
            <h1>My Profile</h1>
            <div className='user-info-wrapper'>
                <h3>Admin</h3>
                <Status />
                <div className='img-wrapper'>
                    <img src='https://thumbs.dreamstime.com/b/faceless-businessman-avatar-man-suit-blue-tie-human-profile-userpic-face-features-web-picture-gentlemen-85824471.jpg' alt='user-avatar' />
                </div>
                {editMode ? <WithReduxUserForm initialValues={userData} onSubmit={submit}/> : <UserInfo startEdit={() => setEditMode(true)} userData={userData}/>}
            </div>
        </div>
    );
};

Profile.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired,
    setUserData: PropTypes.func.isRequired
}

export default Profile;