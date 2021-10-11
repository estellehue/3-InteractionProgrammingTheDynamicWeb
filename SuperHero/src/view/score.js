import React from 'react';

function Score({ score }) {

    return (
        <div className="scores">
            <h2>{score}</h2>
        </div>
    );
};

export default Score;