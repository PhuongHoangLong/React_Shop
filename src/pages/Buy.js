import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Buy() {
  const [shop, setShop] = useState(null);
  const params = useParams();
  useEffect(() => {
    var url = 'https://62b90e92ff109cd1dc8ad594.mockapi.io/shop/' + params.id;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setShop(data));
    setShop(data);

    console.log(url);
  }, []);

  return (
    <div className="container">
      <p className="h1 text-center">Detail</p>

      <table>
        <tr>
          <th>
            <img src={item.pictures} />
          </th>
          <th></th>
        </tr>
      </table>
    </div>
  );
}
export default Buy;
