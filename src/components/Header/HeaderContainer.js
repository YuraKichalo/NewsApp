import React from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Header from "./Header";
import { setAuth } from "../../redux/authReducer";
import {getIsAuth} from "../../common/selectors/auth";

const HeaderContainer = (props) => {
    return <Header isAuth={props.isAuth} setAuth={props.setAuth} />
};

HeaderContainer.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    setAuth: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        isAuth: getIsAuth(state),
    }
};

export default connect(mapStateToProps, { setAuth })(HeaderContainer);