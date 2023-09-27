import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navigation'>
        <b className='title'>Reeco</b>
        <p>Store</p>
        <p>Orders</p>
        <p>Analytics</p>
      </div>

      <div className='profile'>
        <span class='material-symbols-outlined'>shopping_cart</span>
        <p>
          Hello,
          <select>
            <option selected>James</option>
            <option>Jones</option>
            <option>Bond</option>
          </select>
        </p>
      </div>
    </div>
  );
}

export default Navbar;
