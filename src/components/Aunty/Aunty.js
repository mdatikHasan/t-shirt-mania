import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Granpa/Grandpa';

const Aunty = ({}) => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h1>Aunty</h1>
            <p>House: {house}</p>
            <p>Ring: {house}</p>
            <button onClick={()=> setHouse(house + 1)}>Buy a house </button>
        </div>
    );
};

export default Aunty;