import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Header from "./Header";
import { setAuth } from "../../redux/authReducer";

const HeaderContainer = (props) => {
    return <Header isAuth={props.isAuth} setAuth={props.setAuth} />
};

HeaderContainer.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    setAuth: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
};

export default connect(mapStateToProps, { setAuth })(HeaderContainer);