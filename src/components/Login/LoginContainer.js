import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Login from "./Login";
import { setAuth } from "../../redux/authReducer";

const LoginContainer = (props) => {
    return <Login setAuth={props.setAuth} isAuth={props.isAuth} />
};

LoginContainer.propTypes = {
    setAuth: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, { setAuth })(LoginContainer);