// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import CartPage from './CartPage';
import './App.css'
const App = () => {
  return (
    <Router>
      <div>
        
        <nav className='container'>
          <h1>Shopping Cart</h1>
          {/* <ul> */}
            <li className='btn'>
              <Link to="/">Home</Link>
            </li>
            <li className='btn'>
              <Link to="/cart">My Cart</Link>
            </li>
          {/* </ul> */}
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
