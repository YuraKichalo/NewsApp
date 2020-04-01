import React from "react";
import MDSpinner from "react-md-spinner";

const Loader = () => {
    return (
        <div className='spinner'>
            <MDSpinner size={100} />
        </div>
    );
};

export default Loader;