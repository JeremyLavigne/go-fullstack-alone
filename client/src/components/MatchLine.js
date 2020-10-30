import React from 'react';

const MatchLine = (obj) => {
    const { match } = obj.match; // One rank below..

    const lineStyle = {
        display: 'flex',
    };

    return (
        <div>
            <p>{match.homeTeam} vs. {match.awayTeam}</p>
            <div style={lineStyle}>
                <p>1N2</p>
                <button>{match.oddH}</button>
                <button>{match.oddD}</button>
                <button>{match.oddA}</button>
                <p>O/U</p>
                <button>{match.oddOver}</button>
                <button>{match.oddUnder}</button>
            </div>
        </div>
    );
};

export default MatchLine;
