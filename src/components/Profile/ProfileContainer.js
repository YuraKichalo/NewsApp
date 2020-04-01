import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getIsAuth} from "../../common/selectors/auth";

const ProfileContainer = (props) => {
    return <Profile isAuth={props.isAuth} />
};

ProfileContainer.propTypes = {
    isAuth: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
    return {
        isAuth: getIsAuth(state)

    }
};

export default connect(mapStateToProps)(ProfileContainer);