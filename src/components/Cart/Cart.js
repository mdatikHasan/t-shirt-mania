import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    // Conditional rendering options
    // 1. Element variable
    // 2. ternary operator condition ? true : flase
    // 3. && Operator (shorthand)
    // 4. or operator (shorthand)

    // 1. Element variable
    let command;
    if (cart.length === 0) {
        command = <p>Please add at least one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more...</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }
    return (
        <div>
            <h2>Item selected : {cart.length}</h2>

            {/* // 3. && Operator (shorthand) */}
            {
                cart.length === 3 && <div className='orange'>
                    <h3>Trigonal</h3>
                    <p>Tin jon ke ki gift diba</p>
                </div>
            }

            {command}

            {cart.map(tshirt =>
                <p>{tshirt.name} <button onClick={() => handleRemoveFromCart(tshirt)}>X</button></p>)}

            {/* // 2. ternary operator condition ? true : flase */}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button>}
        </div>

    );
};

export default Cart;