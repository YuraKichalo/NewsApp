import React from "react";
import PropTypes from 'prop-types';
import Button from "../../../common/components/Button/Button";

const UserInfo = ({ startEdit, userData }) => {
    const { aboutMe, favouriteNews, facebook, linkedin, instagram } = userData;

    return (
        <div className='user-info'>
            <p><b>About Me: </b>{aboutMe}</p>
            <p><b>Favourite news category: </b>{favouriteNews}</p>
            <p><b>Contacts:</b></p>
            <div className='contacts'>
                <p>
                    <b>Facebook: </b>
                    <a href={facebook} target='_blank'>{facebook}</a>
                </p>
                <p>
                    <b>LinkedIn: </b>
                    <a href={linkedin} target='_blank'>{linkedin}</a>
                </p>
                <p>
                    <b>Instagram: </b>
                    <a href={instagram} target='_blank'>{instagram}</a>
                </p>
            </div>
            <Button onClick={startEdit} size='small'>Edit</Button>
        </div>
    );
};

UserInfo.propTypes = {
    startEdit: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired
}

export default UserInfo