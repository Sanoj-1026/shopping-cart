import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };

    return (
        <div className="App">
            <Cart cart={cart} />
            <ProductList
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
                cart={cart}
            />
        </div>
    );
}

export default App;
