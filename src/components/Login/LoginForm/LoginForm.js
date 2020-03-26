import React from "react";
import Button from "../../../common/components/Button/Button";
import {Field, reduxForm} from "redux-form";
import {requiredFieald} from "../../../common/services/validators/loginValidator";

const requiredFiealdName = requiredFieald('Name');
const requiredFiealdPassword = requiredFieald('Password');

const LoginForm = (props) => {
    const renderErrorsMessage = ({touched, error}) => {
        if (error && touched) return <div className='ui error message'>{error}</div>
    };

    const renderInput = ({input, meta, ...val}) => {
        return (
            <div className='field'>
                <input {...input} {...val} />
                {renderErrorsMessage(meta)}
            </div>
        );
    };

    return (
        <form className='ui form error' onSubmit={props.handleSubmit}>
            <h1>Login</h1>
            <Field name='name' placeholder='Name' component={renderInput} validate={requiredFiealdName} />
            <Field name='password' placeholder='Password' component={renderInput} validate={requiredFiealdPassword} />
            {props.error ? <div className='ui error message'>{props.error}</div> : null}
            <Button size='small'>Submit</Button>
        </form>
    );
};

const WithReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default WithReduxForm;