import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ content, type, onClick }) => (
    <button className={`button ${type}`} onClick={onClick} >
        {content}
    </button>
);

Button.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;
