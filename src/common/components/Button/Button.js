import React from "react";
import PropTypes from 'prop-types';

const Button = ({ children, size, color, onClick }) => (
    <button onClick={onClick} className={`${size} ui ${color} button`}>{children}</button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    size: 'medium',
    color: 'primary',
    onLogout: null
};

export default Button;