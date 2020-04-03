import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getIsAuth} from "../../common/selectors/auth";
import {getUserData} from "../../common/selectors/user";
import {setUserData} from "../../redux/userReducer";

const ProfileContainer = (props) => {
    return <Profile isAuth={props.isAuth} userData={props.userData} setUserData={props.setUserData}/>
};

ProfileContainer.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    userData: PropTypes.object.isRequired,
    setUserData: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        isAuth: getIsAuth(state),
        userData: getUserData(state),
    }
};

export default connect(mapStateToProps, {setUserData})(ProfileContainer);