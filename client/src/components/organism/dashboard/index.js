import React, { useEffect, useState } from 'react';
import './style.css';

import Button from '../../atoms/button';

const DashBoard = () => {
    const initDate1 = new Date(2017, 7, 11);
    const initDate2 = new Date(2017, 7, 17);
    // const [startDate, setStartDate] = useState({
    //     day: initDate.getDate(), mth: initDate.getMonth() + 1,
    // });
    // const [endDate, setEndDate] = useState({
    //     day: initDate.getDate() + 6, mth: initDate.getMonth() + 1,
    // });
    const startDate = {
        day: initDate1.getDate(), mth: initDate1.getMonth() + 1,
    };
    const endDate = {
        day: initDate2.getDate(), mth: initDate2.getMonth() + 1,
    };

    // useEffect(() => {
    //     startDate.setDate(startDate.getDate() + 7);
    //     endDate.setDate(endDate.getDate() + 7);
    // }, [startDate, endDate]);

    const moveForward = () => {
        initDate1.setDate(initDate1.getDate() + 7);
        startDate.day = initDate1.getDate();
        startDate.mth = initDate1.getMonth + 1;
        initDate2.setDate(initDate2.getDate() + 7);
        endDate.day = initDate2.getDate();
        endDate.mth = initDate2.getMonth + 1;
    };

    return (
        <div id="dashboard">
            <h3>Active week</h3>
            <div id="active-week">
                <p>
                    {startDate.day}/{startDate.mth}
                    - {endDate.day}/{endDate.mth}
                </p>
                <Button content="Next" type="arrow" onClick={moveForward}/>
            </div>
        </div>
    );
};

export default DashBoard;
