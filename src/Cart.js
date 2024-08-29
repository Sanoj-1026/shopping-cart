import React from 'react';
import './App.css';

function Cart({ cart }) {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            <p>Items in cart: {cart.length}</p>
        </div>
    );
}

export default Cart;
