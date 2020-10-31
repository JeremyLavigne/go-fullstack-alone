import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ content, type }) => (
    <button className={`button ${type}`} >
        {content}
    </button>
);

Button.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Button;
