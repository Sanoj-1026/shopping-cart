import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file

function ProductList() {
    const [products] = useState([
        { id: 1, name: 'Product 1', description: 'Description of Product 1', image:'/images/portfolio5.jpg' },
        { id: 2, name: 'Product 2', description: 'Description of Product 2', image: '/images/portfolio5.jpg' },
        { id: 3, name: 'Product 3', description: 'Description of Product 3', image: '/images/portfolio5.jpg' },
    ]);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product.id]);
    };

    const handleRemoveFromCart = (product) => {
        setCart(cart.filter(id => id !== product.id));
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    {cart.includes(product.id) ? (
                        <button className="cart-btn remove-btn" onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
                    ) : (
                        <button className="cart-btn add-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProductList;
