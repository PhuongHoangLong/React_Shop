import { useState } from 'react';
import { useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
const Product = () => {
  const [data, setData] = useState([]);
  const [shop, setshop] = useState(null);
  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62b90e92ff109cd1dc8ad594.mockapi.io/Shop';

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data); //setStudents(data)
   
      });
    console.log(data);
  }, []);

  return (
    <div className="container  ">
      <div className="row card-deck ">
        {data.map((item) => {
          return (
            <div className="col-sm-4">
              <img className="card-img-top mt-3" src={item.images} />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.price}đ</p>
                <Link to={'/images/' + item.id}>
                  <button className="btn btn-primary">Buy</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Product;
