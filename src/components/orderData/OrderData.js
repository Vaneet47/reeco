import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, updateStatus } from './orderDataSlice';

import './orderData.css';

function OrderData() {
  const [crossPopup, setCrossPopup] = useState(false);
  const [id, setId] = useState(null);

  const data = useSelector((state) => state.orderData.orderData);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(fetchData());
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCross = (id) => {
    setCrossPopup(true);
    setId(id);
  };

  const handleDone = (id) => {
    dispatch(updateStatus({ id, status: 'Approved' }));
  };

  const closePopup = () => {
    setCrossPopup(false);
    setId(null);
  };

  const handleNo = () => {
    dispatch(updateStatus({ id, status: 'Missing' }));
    setCrossPopup(false);
  };

  const handleYes = () => {
    dispatch(updateStatus({ id, status: 'Missing-Urgent' }));
    setCrossPopup(false);
  };

  return (
    <>
      <div className='order-data'>
        <div className='head'>
          <div className='search'>
            <input placeholder='Search...' />
          </div>
          <div className='add-print'>
            <button className='back add-item'>Add item</button>
            <span className='material-symbols-outlined icon print'>print</span>
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
              <th></th>
              <th></th>
              <th></th>
            </tr>
            {data.map((item) => {
              return (
                <tr>
                  <td className='image'>
                    <img src='./avocado.jpg' alt='avocado' />
                  </td>
                  <td>{item.productName}</td>
                  <td>{item.brand}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                  <td className='backg'>
                    <div className={`status status-${item.status}`}>
                      {item.status}
                    </div>
                  </td>
                  <td className='backg'>
                    <span
                      className={`material-symbols-outlined icon-cta done-${item.status}`}
                      onClick={() => {
                        handleDone(item.id);
                      }}
                    >
                      done
                    </span>
                  </td>
                  <td className='backg'>
                    <span
                      className={`material-symbols-outlined icon-cta close-${item.status}`}
                      onClick={() => {
                        handleCross(item.id);
                      }}
                    >
                      close
                    </span>
                  </td>
                  <td className='edit-cta backg'>edit</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      {crossPopup && (
        <div className='cross-popup'>
          <div className='popup-content'>
            <span className='close-button' onClick={closePopup}>
              &times;
            </span>
            <h2 className='dialog-title'>Missing Product</h2>

            <p className='dialog-question'>
              Is {`'${data[id].productName}...'`} urgent?
            </p>

            <div className='buttons-container'>
              <button className='buttons' onClick={handleNo}>
                No
              </button>
              <button className='buttons' onClick={handleYes}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderData;
