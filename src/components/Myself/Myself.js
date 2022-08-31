import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h1>My self</h1>
            <p>House: {house}</p>
            <Special></Special>
        </div>
    );
};

export default Myself;