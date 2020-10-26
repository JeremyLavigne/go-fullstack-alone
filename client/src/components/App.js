import React, { useState } from 'react'
import matchesService from '../services/matches'

const App = () => {

    const [ matches, setMatches ] = useState(null);

    const getAnswerFromDb = () => {
        matchesService
        .getAll()
        .then(matchesFromDb => {
            console.log('promise fulfilled (getAll, first)')
            setMatches(matchesFromDb)
        })
    }

    return (
        <div>
            <button
              onClick={getAnswerFromDb}
            >
                Please say that we can reach the server. Please say we didn't waste 3h.
            </button>
            <br />
            <br />
            {matches}
        </div>
    )
};

export default App;