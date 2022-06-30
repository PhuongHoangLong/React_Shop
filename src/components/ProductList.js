import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProductList(props) {
  const [shop, setShop] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    console.log('product list useEffect!!');
    setShop(props.data);
    console.log('categories useEffect');
    setCategories(props.data);
  }, [props.data]);

  var products_jsx = [];
  if (shop != null) {
    products_jsx = shop.map((item) => (
      <div className="row">
        <div style={{ margin: '10px' }} class="col-sm-4 col-md-3">
          <img className="" src={item.pictures} />
          <div className="text-center">
            <p class="title h5 text-center">{item.title}</p>
            <p className=" category text-center text-danger">{item.category}</p>
            <p class="title h3 text-center text-primary">{item.Price}đ</p>
            <button class="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <div className="container">
      <div>{products_jsx}</div>
    </div>
  );
}

export default ProductList;
