import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Collapse} from 'react-collapse';
import './Accordion.css';

const Accordion = ({ title, children }) => {
    const [isOpened, setIsOpened] = useState(false);
    const color = isOpened ? 'darkgreen' : 'black';
    const styles = { color };

    const handleClick = () => {
        setIsOpened(!isOpened)
    };

    return (
        <>
            <h2 className='collapse-title' onClick={handleClick} style={styles}>
                <i className={`angle ${isOpened ? 'up' : 'down'} icon`}></i>
                {title}
            </h2>
            <Collapse isOpened={isOpened}>
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