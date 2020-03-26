import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Collapse} from 'react-collapse';
import './Accordion.css';

const Accordion = ({ title, children }) => {
    const [isOpened1, setIsOpened1] = useState(false);
    const color = isOpened1 ? 'darkgreen' : 'black';
    const styles = { color };

    const handleClick = () => {
        setIsOpened1(!isOpened1)
    };

    return (
        <>
            <h2 className='collapse-title' onClick={handleClick} style={styles}>
                <i className={`angle ${isOpened1 ? 'up' : 'down'} icon`}></i>
                {title}
            </h2>
            <Collapse isOpened={isOpened1}>
                {children}
            </Collapse>
        </>
    );
};

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};

export default Accordion;