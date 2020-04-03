import React from "react";
import Button from "../../../common/components/Button/Button";
import {Field, reduxForm} from "redux-form";
import {requiredFieald} from "../../../common/services/validators/loginValidator";
import {renderInput} from "../../../common/services/formServices/formControls";

const requiredFieldName = requiredFieald('Name');
const requiredFieldPassword = requiredFieald('Password');

const LoginForm = (props) => {
    return (
        <form className='ui form error' onSubmit={props.handleSubmit}>
            <h1>Login</h1>
            <Field name='name' placeholder='Name' component={renderInput} validate={requiredFieldName} />
            <Field name='password' placeholder='Password' type='password' component={renderInput} validate={requiredFieldPassword} />
            {props.error ? <div className='ui error message'>{props.error}</div> : null}
            <Button size='small'>Submit</Button>
        </form>
    );
};

const WithReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default WithReduxForm;