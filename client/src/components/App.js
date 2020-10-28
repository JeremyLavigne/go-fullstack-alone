import React, { useState } from 'react'
import matchesService from '../services/matches'

const App = () => {

    const [ matches, setMatches ] = useState(null);

    const getAnswerFromDb = () => {
        matchesService
        .getAll()
        .then(matchesFromDb => {
            console.log('Get all.');
            setMatches(matchesFromDb);
        })
    }

    return (
        <div>
            <button
              onClick={getAnswerFromDb}
            >
                Get All Matches.
            </button>

            {matches ? matches.map(match => <li key={match.key}>{match.key} - {match.object.teamHome} vs {match.object.teamAway}</li>) : null}
            
        </div>
    )
};

export default App;