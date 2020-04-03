import React from "react";

const renderErrorsMessage = ({touched, error}) => {
    if (error && touched) return <div className='ui error message'>{error}</div>
};

export const renderInput = ({input, meta, ...val}) => {
    return (
        <div className='field'>
            <input {...input} {...val} />
            {renderErrorsMessage(meta)}
        </div>
    );
};

export const renderTextarea = ({input, meta, ...val}) => {
    return (
        <div className='field'>
            <textarea {...input} {...val} />
            {renderErrorsMessage(meta)}
        </div>
    );
};