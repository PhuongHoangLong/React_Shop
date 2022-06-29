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
      <div style={{ margin: '10px' }} class=" card col-md-3 ">
        <img className="card-img mt-3" src={item.images} />
        <div className="text-center">
          <p class="title h5 text-center">{item.name}</p>
          <p class="title h5 text-center">{item.price}đ</p>
          <button class="btn btn-primary">Buy</button>
        </div>
      </div>
    ));
  }
  return (
    <div className="container">
      <div className="card-deck ">{products_jsx}</div>;
    </div>
  );
}

export default ProductList;
