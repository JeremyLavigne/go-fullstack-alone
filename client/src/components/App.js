import React, { useState } from 'react'
import matchesService from '../services/matches'

const App = () => {

    const [ matches, setMatches ] = useState(null);
    const [ newData, setNewData ] = useState('');
    const [ idToDelete, setidToDelete ] = useState('');

    const getAnswerFromDb = () => {
        matchesService
        .getAll()
        .then(matchesFromDb => {
            console.log('Get all.');
            setMatches(matchesFromDb);
        })
    }

    const addOneIntodb = () => {

        if (newData === '') {
            console.log('Empty object')
            return;
        }

        matchesService
        .postOne(newData)
        .then(() => {
            console.log('Added!');
            setNewData('');
        })
    }

    const deleteOneIntoDb = () => {

        if (newData === '') {
            console.log('Empty id')
            return;
        }
        console.log('Not ready yet.')

        // matchesService
        // .postOne(newData)
        // .then(() => {
        //     console.log('Deleted!');
        //     setNewData('');
        // })
    }

    return (
        <div>
            <button
              onClick={getAnswerFromDb}
            >
                Get All button
            </button>

            <br />
            <br />

            {matches ? matches.map(match => <li key={match.key}>{match.key} - {match.object}</li>) : null}

            <br />
            <br />

            <button
              onClick={addOneIntodb}
            >
                Post One button
            </button>

            <br />
            <br />

            Enter something, post it, and get all again 
            <br />
            <input value={newData} onChange={(event) => setNewData(event.currentTarget.value)} />

            <br />
            <br />

            <button
              onClick={deleteOneIntoDb}
            >
                Delete One button
            </button>

            <br />
            <br />

            Enter id of the one you want to delete (Not ready yet)
            <br />
            <input value={idToDelete} onChange={(event) => setidToDelete(event.currentTarget.value)} />

            <br />
            <br />
            
        </div>
    )
};

export default App;