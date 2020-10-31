import React from 'react';
import Title from '../../atoms/title';
import Button from '../../atoms/button';

const MatchLine = (obj) => {
    const match = obj.obj; // One rank below..

    const lineStyle = {
        display: 'flex',
    };

    return (
        <div>
            <Title content={`${match.homeTeam} vs. ${match.awayTeam}`} type="odd" />
            <div style={lineStyle}>
                <p>1N2</p>
                <Button content={match.oddH} type="odd" />
                <Button content={match.oddD} type="odd" />
                <Button content={match.oddA} type="odd" />
                <p>O/U</p>
                <Button content={match.oddOver} type="odd" />
                <Button content={match.oddUnder} type="odd" />
            </div>
        </div>
    );
};

export default MatchLine;
