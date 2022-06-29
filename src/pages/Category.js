import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../components/ProductList';

const Category = () => {
  const [products, setProducts] = useState(null);
  const [category_namme, setName] = useState(null);
  const params = useParams();
  useEffect(() => {
    console.log('user use effect!!');

    let url =
      'https://62b90e92ff109cd1dc8ad594.mockapi.io/Shop' +
      params.name;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setName(params.name);
      });
  }, []);

  return (
    <div>
      <div className="App-jumbotron jumbotron text-center ">
        <h1>{category_namme} Products</h1>
        <p>Here We Go</p>
      </div>
      <div className="container ">
        <ProductList data={products}></ProductList>
      </div>
    </div>
  );
};

export default Category;
