import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../Granpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h1>Special</h1>
            <p>Gift: {house}</p>
            <button onClick={()=> setHouse(house + 1)}>Buy a house</button>
        </div>
        
    );
}; 

export default Special;