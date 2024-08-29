import React from 'react';
import Product from './Product';

const products = [
    { id: 1, name: 'Product 1', description: 'This is the description for product 1' },
    { id: 2, name: 'Product 2', description: 'This is the description for product 2' },
    { id: 3, name: 'Product 3', description: 'This is the description for product 3' },
    { id: 4, name: 'Product 4', description: 'This is the description for product 3' },
    { id: 5, name: 'Product 5', description: 'This is the description for product 3' },
    { id: 6, name: 'Product 6', description: 'This is the description for product 3' },
    { id: 7, name: 'Product 7', description: 'This is the description for product 3' },
    { id: 8, name: 'Product 8', description: 'This is the description for product 3' },
    { id: 9, name: 'Product 9', description: 'This is the description for product 3' },
];

function ProductList({ onAddToCart, onRemoveFromCart, cart }) {
    return (
        <div className="product-list">
            {products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onRemoveFromCart={onRemoveFromCart}
                    inCart={cart.some(item => item.id === product.id)}
                />
            ))}
        </div>
    );
}

export default ProductList;
