import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductList from '../components/ProductList';
import '../App.css';

import { Link, NavLink } from 'react-router-dom';

export default function App() {
  const [shop, setShop] = useState(null);
  const [categories, setCategories] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62b90e92ff109cd1dc8ad594.mockapi.io/shop';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setShop(data);
      });

    console.log('app useeffect!!');
    let url_category = 'https://62b90e92ff109cd1dc8ad594.mockapi.io/category';

    fetch(url_category)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const doSearch = () => {
    console.log('searchTerm', searchTerm);
    console.log('app useeffect!!');
    let url =
      'https://62b90e92ff109cd1dc8ad594.mockapi.io/shop?name=' + searchTerm;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchTerm('');
        setShop(data);
      });
  };

  var category_jsx = [];

  if (categories != null) {
    category_jsx = (
      <nav className="navbar navbar-inverse bg-light">
        <ul className="nav navbar-nav">
          {
            (category_jsx = categories.map((item) => (
              <li>
                <Link to={'category/' + item.category_name}>
                  {item.category_name}
                </Link>
              </li>
            )))
          }
        </ul>
      </nav>
    );
  }

  return (
    <div>
      <div className="App-jumbotron jumbotron text-center ">
        <h1>Welcome to zZShop</h1>
        <p>We specialize in blablabla</p>
        <form className="form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              size="50"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="input-group-btn">
              <button
                type="button"
                className="btn btn-danger"
                onClick={doSearch}
              >
                Search
              </button>
              <Link to={'/addnew'}>
                <button className="btn btn-primary">
                  <i class="fa-solid fa-plus"></i> Add
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      {category_jsx}
      <div className="container">
        <h1>Our New shop</h1>
        <ProductList data={shop}></ProductList>
      </div>
    </div>
  );
}
