import React from 'react';
import Title from '../../atoms/title';
import Button from '../../atoms/button';
import Label from '../../atoms/label';

import './style.css';

const MatchLine = (obj) => {
    const match = obj.obj; // One rank below..

    return (
        <div className="match-line-bloc">
            <Title content={`${match.homeTeam} vs. ${match.awayTeam}`} type="match" />
            <div className="odd-line">
                <div>
                    <Label content="1" type="odd-label" />
                    <Button content={match.oddH} type="odd-button" onClick={ () => {} } />
                </div>
                <div>
                    <Label content="X" type="odd-label" />
                    <Button content={match.oddD} type="odd-button" onClick={ () => {} } />
                </div>
                <div>
                    <Label content="2" type="odd-label" />
                    <Button content={match.oddA} type="odd-button last" onClick={ () => {} } />
                </div>
                <div>
                    <Label content="Over 2,5" type="odd-label" />
                    <Button content={match.oddOver} type="odd-button" onClick={ () => {} } />
                </div>
                <div>
                    <Label content="Under 2,5" type="odd-label" />
                    <Button content={match.oddUnder} type="odd-button" onClick={ () => {} } />
                </div>
            </div>
        </div>
    );
};

export default MatchLine;
