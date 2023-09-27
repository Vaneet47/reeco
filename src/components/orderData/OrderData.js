import React, { useEffect, useState } from 'react';
import './orderData.css';

function OrderData() {
  const [data, setData] = useState([]);
  const [crossPopup, setCrossPopup] = useState(false);
  const [id, setId] = useState(null);

  const getData = () => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });

    // store all this data in redux
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCross = (id) => {
    setCrossPopup(true);
    setId(id);
    console.log(id);
  };

  const handleDone = (id) => {
    console.log(id);
    // update redux store
  };

  const closePopup = () => {
    setCrossPopup(false);
    setId(null);
  };

  const handleNo = () => {
    // update redux store
  };

  const handleYes = () => {
    // update redux store
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
                  <td>
                    <div className={`status status-${item.status}`}>
                      {item.status}
                    </div>
                  </td>
                  <td>
                    <span
                      className={`material-symbols-outlined icon-cta ${item.status}`}
                      onClick={() => {
                        handleDone(item.id);
                      }}
                    >
                      done
                    </span>
                  </td>
                  <td>
                    <span
                      className='material-symbols-outlined icon-cta'
                      onClick={() => {
                        handleCross(item.id);
                      }}
                    >
                      close
                    </span>
                  </td>
                  <td className='edit-cta'>edit</td>
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
