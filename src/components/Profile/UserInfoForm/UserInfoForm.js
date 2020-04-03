import React from "react";
import {Field, reduxForm} from "redux-form";
import Button from "../../../common/components/Button/Button";
import {renderInput, renderTextarea} from "../../../common/services/formServices/formControls";
import {requiredFieald} from "../../../common/services/validators/loginValidator";

const requiredFieldCategory = requiredFieald('Favourite news');
const requiredFieldAboutMe = requiredFieald('About me');

const UserInfoForm = (props) => {
    return (
        <form className='ui form error' onSubmit={props.handleSubmit}>
            <p><b>About Me: </b></p>
            <Field name='aboutMe' placeholder='about me' component={renderTextarea} validate={requiredFieldAboutMe} />
            <p><b>Favourite news category: </b></p>
            <Field name='favouriteNews' placeholder='favourite category' component={renderInput} validate={requiredFieldCategory}/>
            <p><b>Contacts:</b></p>
            <div className='contacts'>
                <div className='social'>
                    <p><b>Facebook: </b></p>
                    <Field name='facebook' placeholder='facebook' component={renderInput} />
                </div>
                <div className='social'>
                    <p><b>LinkedIn: </b></p>
                    <Field name='linkedin' placeholder='linkedin' component={renderInput} />
                </div>
                <div className='social'>
                    <p><b>Instagram:  </b></p>
                    <Field name='instagram' placeholder='instagram' component={renderInput} />
                </div>
            </div>
            <Button size='small'>Save</Button>
        </form>
    );
};

const WithReduxUserForm = reduxForm({
    form: 'userInfo'
})(UserInfoForm);

export default WithReduxUserForm