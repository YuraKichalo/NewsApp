import React, { useState, useEffect } from "react";

const Status = () => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(localStorage.getItem('user-current-status'));

    useEffect(() => {
        localStorage.setItem('user-current-status', status)
        setStatus(localStorage.getItem('user-current-status'));
    }, [status]);

    console.log('LOCAL STORE: ' + localStorage.getItem('user-current-status'))

    const deactivate = () => setEditMode(false);

    const activate = () => setEditMode(true);

    const onInputChange = e => setStatus(e.target.value);

    if (editMode) {
        return (
            <div className='ui input'>
                <input type='text' onBlur={deactivate} autoFocus={true} onChange={onInputChange} value={status} />
            </div>
        )
    }
    return <span onClick={activate}>{`${status ? status : 'Set your status (click on it)'}`}</span>
};

export default Status;