import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const images = () => {
  const params = useParams();
  const [shop, setshop] = useState(null);
  useEffect(() => {
    console.log('images use effect!!');
    let url = 'https://62b90e92ff109cd1dc8ad594.mockapi.io/Shop/' + params.id;

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.name);

        setshop(data); //setshops(data)
      });
  }, [params.id]);

  return (
    <>
      {shop != null ? (
        <div class="container bootstrap snippets bootdey">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col-md-6">
                <table>
                  <tr>
                    <td>Name</td>
                    <td class="text-primary">{shop.id}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Price</strong>
                    </td>
                    <td class="text-primary">{shop.price}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Email</strong>
                    </td>
                    <td class="text-primary">{shop.bio}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Picture</strong>
                    </td>

                    <td class="text-primary">
                      <img src={shop.images} className="img-circle" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Bio</strong>
                    </td>
                    <td>{shop.bio}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
};

export default images;
