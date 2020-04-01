import React from "react";
import PropTypes from 'prop-types';
import {SubmissionError} from "redux-form";
import {Redirect} from "react-router-dom";
import './Login.css';
import WithReduxForm from "./LoginForm/LoginForm";
import {appRoutes} from "../../common/constants/routs";


const Login = ({ setAuth, isAuth }) => {
    const submit = (values) => {
        if (!['admin'].includes(values.name) || values.password !== '12345') {
            throw new SubmissionError({
                _error: 'The username or password you entered is incorrect'
            })
        } else {
            setAuth(true);
        }
    };

    if (isAuth) {
        return <Redirect to={appRoutes.profile} />
    }

    return (
        <div className='login'>
            <WithReduxForm onSubmit={submit} />
        </div>
    );
};

Login.propTypes = {
    setAuth: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
};

export default Login;