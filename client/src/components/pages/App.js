import React, { useState, useEffect } from 'react';
import matchesService from '../../services/matches';
import './App.css';

// Components
import MatchLine from '../molecule/line';
import Header from '../organism/header';
import Footer from '../organism/footer';
import DashBoard from '../organism/dashboard';

import * as dateHelper from '../../utils/manageDate';

const App = () => {
    const [matches, setMatches] = useState(null);

    useEffect(() => {
        matchesService
            .getAll()
            .then((matchesFromDb) => {
                console.log('Get all.');
                setMatches(matchesFromDb);
            });
    }, []);

    const [startDate, setStartDate] = useState({ day: '11', mth: '08' });
    const [endDate, setEndDate] = useState({ day: '17', mth: '08' });

    const moveForward = () => {
        setStartDate(dateHelper.increaseWeek(startDate));
        setEndDate(dateHelper.increaseWeek(endDate));
    };

    return (
        <div className='main-body'>
            <Header />

            <section className='main-section'>
                <DashBoard startDate={startDate} endDate={endDate} moveForward={moveForward} />
                <div>
                    {matches
                        ? matches
                            // eslint-disable-next-line max-len
                            .filter((obj) => dateHelper.isBetween(obj.match.Date, startDate, endDate))
                            .sort((a, b) => dateHelper.orderDate(a.match.Date, b.match.Date))
                            .map((obj) => <MatchLine key={obj.key} obj={obj.match} />)
                        : null
                    }
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default App;
