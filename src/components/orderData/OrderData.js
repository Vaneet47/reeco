import React from 'react';
import './orderData.css';

function OrderData() {
  return (
    <div className='order-data'>
      <div className='head'>
        <div className='search'>
          <input placeholder='Search...' />
        </div>
        <div className='add-print'>
          <button className='back add-item'>Add item</button>
          <span class='material-symbols-outlined icon print'>print</span>
        </div>
      </div>

      <div>Table</div>
    </div>
  );
}

export default OrderData;
