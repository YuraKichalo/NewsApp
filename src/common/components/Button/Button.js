import React from "react";
import PropTypes from 'prop-types';

const Button = ({ children, size, color, onLogout }) => (
    <button onClick={onLogout} className={`${size} ui ${color} button`}>{children}</button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    onLogout: PropTypes.func
};

Button.defaultProps = {
    size: 'medium',
    color: 'primary',
    onLogout: null
};

export default Button;