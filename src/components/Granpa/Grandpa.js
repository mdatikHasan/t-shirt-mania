import React from 'react';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import { useState } from 'react';
import { createContext } from 'react';

export const RingContext = createContext('ring')

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const diamondRing = 'Diamond Ring'

    const buyAHouse = () => {
        const newHouse = house + 1;
        setHouse(newHouse)

    } 

    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa' >
                <h3>Granpa</h3>
                <p>House: {house}</p>
                <button onClick={buyAHouse}>Buy a house</button>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;