import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Label = ({ content, type }) => (
    <span className={`label ${type}`} >
        {content}
    </span>
);

Label.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Label;
