import React from "react";
import MDSpinner from "react-md-spinner";
import PropTypes from 'prop-types';

const Loader = ({ title, children }) => {
    return (
        <div className='spinner'>
            <MDSpinner size={100} />
        </div>
    );
};

Loader.propTypes = {

};

export default Loader;