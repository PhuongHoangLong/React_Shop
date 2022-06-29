import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList(props) {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    console.log('product list useEffect!!');
    setProducts(props.data);
  }, [props.data]);

  var products_jsx = [];
  if (products != null) {
    products_jsx = products.map((item) => (
      <div className="card col-sm-4">
        <img
          className="card-img-top mt-3"
          src={item.picture}
          alt="Card image"
        />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.category}</p>
          <p className="card-text">${item.price}</p>
          <button className="btn btn-primary">Buy</button>
        </div>
      </div>
    ));
  }
  return <div className="row card-deck ">{products_jsx}</div>;
}

export default ProductList;
