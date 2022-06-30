import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Buy = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const [phone, setPhone] = useState();
  useEffect(() => {
    console.log(' buy useEffect!!! ');
    let url = 'https://62b90e92ff109cd1dc8ad594.mockapi.io/shop/' + params.id;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setShop(data);
      });
    console.log('>>> check dataUse : ', data);
  }, []);

  return (
    <div className="container">
      <p className="h1 text-center">Detail</p>

      <table>
        <tr>
          <th colSpan="2" rowSpan="6">
            <img src={data.pictures} />
          </th>
          <th style={{ width: '100%' }} className="h2 text-center">
            Information
          </th>
        </tr>
        <tr>
          <td className="h3 text-left">{data.title}</td>
        </tr>
        <tr>
          <td className="h3 text-left text-primary">{data.Price}$</td>
        </tr>
        <tr>
          <td className="h3 text-left text-danger">{data.category}</td>
        </tr>
        <tr>
          <td className="h3 text-left">{data.bio}</td>
        </tr>
        <tr>
          <td className="h3 text-center">
            <input
              className="form-control input-lg"
              type="number"
              placeholder="1"
            />
            <button
              style={{ width: '40%', fontSize: '20px' }}
              className="btn btn-danger"
            >
              <i class="fa-solid fa-cart-arrow-down"></i> AddCart
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Buy;
