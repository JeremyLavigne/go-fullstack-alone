import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Title = ({ content, type }) => (
    <h3 className={`title ${type}`}>
        {content}
    </h3>
);

Title.propTypes = {
    content: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Title;
