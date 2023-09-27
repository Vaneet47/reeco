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

      <div>
        <table>
          <tr>
            <th></th>
            <th>Product name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>right</th>
            <th>wrong</th>
            <th>edit</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
            <td>Peter</td>
            <td>
              <span class='material-symbols-outlined'>done</span>
            </td>
            <td>
              <span class='material-symbols-outlined'>close</span>
            </td>
            <td>edit</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default OrderData;
