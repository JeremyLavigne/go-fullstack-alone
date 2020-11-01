import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Button from '../../atoms/button';

const DashBoard = ({ startDate, endDate, moveForward }) => (
    <div id="dashboard">
        <h3>Active week</h3>
        <div id="active-week">
            <p>
                {startDate.day}/{startDate.mth}
                     - {endDate.day}/{endDate.mth}
            </p>
            <Button content="Next" type="arrow" onClick={moveForward} />
        </div>
    </div>
);

DashBoard.propTypes = {
    startDate: PropTypes.object.isRequired,
    endDate: PropTypes.object.isRequired,
    moveForward: PropTypes.func.isRequired,
};

export default DashBoard;
