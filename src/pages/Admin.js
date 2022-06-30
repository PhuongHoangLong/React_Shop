import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Admin() {
  const [shop, setShop] = useState(null);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    var url = 'https://62b90e92ff109cd1dc8ad594.mockapi.io/shop';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setShop(data));

    console.log('admin useeffect');
  }, []);

  const sortColumn = (field, type, direction) => {
    const sortData = [...shop];
    if (type == 'string') {
      sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
    } else if (type == number) {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    }
    setDirection(direction * -1);
    setShop(sortData);
  };

  const deleteProduct = (id) => {
    fetch('https://62b90e92ff109cd1dc8ad594.mockapi.io/shop' + id, {
      method: 'DELETE',
    }).then(() => {
      console.log('DELETE useEffect successfuly!!!');
      let result = [...shop];
      result = result.filter((item) => {
        return item.id != id;
      });
      setShop(result);
    });
  };

  var myList = [];
  if (shop != null) {
    myList = shop.map((item) => (
      <tr 
        key={item.id}
        className={
          item.Price >= 50.0
            ? 'success'
            : item.Price > 30.0
            ? 'primary'
            : 'danger'
        }
      >
        <td >{item.id}</td>
        <td>{item.title}</td>
        <td>{item.category}</td>
        <td>{item.Price}</td>

        <td>{item.pictures}</td>
        <td>{<Link to="/">Detail</Link>}</td>
        <td>
          {
            <Link to="/">
              <button className="btn btn-primary"> Edit</button>
            </Link>
          }

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteProduct(item.id)}
          >
            <i className="fa fa-trash text-danger" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    ));
  }
  return (
    <div className="container">
      <table className="table">
        <tr>
          <th >Id</th>
          <th  onClick={() => sortColumn('title', 'string')}>Tiltle</th>
          <th onClick={() => sortColumn('category', 'string')}>Category</th>
          <th onClick={() => sortColumn('Price', 'number')}>Price</th>
          <th>Picture</th>
          <th>Detail</th>
        </tr>
        <tr className='success'>
          <td> King</td>
        </tr>
        {myList}
      </table>
    </div>
  );
}
export default Admin;
