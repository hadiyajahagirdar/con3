// CartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, checkout } from './actions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckout = () => {
    dispatch(checkout());
  };

  return (
    <div>
      <h1>My Cart Page</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
            </div>
          ))}
          <div>
            <h3>Total: ${total}</h3>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
