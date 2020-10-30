import React, { useState } from 'react';
import matchesService from '../services/matches';

import MatchLine from './MatchLine';

const App = () => {
    const [matches, setMatches] = useState(null);

    const getAnswerFromDb = () => {
        matchesService
            .getAll()
            .then((matchesFromDb) => {
                console.log('Get all.');
                setMatches(matchesFromDb);
            });
    };

    return (
        <div>
            <button
                onClick={getAnswerFromDb}
            >
                Get All Matches.
            </button>

            {matches
                ? matches.map((obj) => <MatchLine key={obj.key} obj={obj.match} />)
                : null
            }

        </div>
    );
};

export default App;
