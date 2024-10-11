import React from 'react';
import Product from './product';

const products = [
  { id: 1, name: 'Ethnic wear saree', price: 29.99, image: "https://tse3.mm.bing.net/th?id=OIP.vFKq1dPcP-jXs9lSg1i3nwHaM9&pid=Api&P=0&h=180" },
  { id: 2, name: 'silk saree', price: 39.99, image: 'https://tse4.mm.bing.net/th?id=OIP.NCw09EdyrY9quUR0jZzDNQHaKX&pid=Api&P=0&h=180' },
  { id: 3, name: 'Paithani saree', price: 49.99, image: 'https://tse4.mm.bing.net/th?id=OIP.a8aPg4Zhyd3nabfqQLPKIwHaKt&pid=Api&P=0&h=180' },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;