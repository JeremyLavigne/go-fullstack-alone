import React, { useState, useEffect } from 'react';
import matchesService from '../../services/matches';
import './App.css';

// Components
import MatchLine from '../molecule/line';
import Header from '../organism/header';
import Footer from '../organism/footer';
import DashBoard from '../organism/dashboard';

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

    return (
        <div className='main-body'>
            <Header />

            <section className='main-section'>
                <DashBoard />
                <div>
                    {matches
                        ? matches.map((obj) => <MatchLine key={obj.key} obj={obj.match} />)
                        : null
                    }
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default App;
