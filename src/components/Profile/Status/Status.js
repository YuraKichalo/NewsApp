import React, { useState, useEffect } from "react";

const Status = () => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(localStorage.getItem('user-current-status'));

    useEffect(() => {
        localStorage.setItem('user-current-status', status)
        setStatus(localStorage.getItem('user-current-status'));
    }, [status]);


    const deactivate = () => setEditMode(false);

    const activate = () => setEditMode(true);

    const onInputChange = e => setStatus(e.target.value);

    return (
        <>
            <span><b>Status: </b></span>
            {editMode ? (
                <div className='ui input'>
                    <input type='text' onBlur={deactivate} autoFocus={true} onChange={onInputChange} value={status} />
                </div>
            ) : (
                <span onClick={activate} className='status-text'>{`${status ? status : 'Set your status (click on it)'}`}</span>
            )}
        </>
    );
};

export default Status;