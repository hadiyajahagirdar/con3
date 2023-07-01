
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './actions';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products from API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_PRODUCTS', payload: data.products });
      });
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className='content'>
      <h1>Home Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

