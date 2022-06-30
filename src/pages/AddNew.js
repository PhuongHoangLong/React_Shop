import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddNew = () => {
  const params = useParams();
  const [shop, setShop] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    console.log('user use effect!!');

    if (params.id != 'new') {
      let url = 'https://62b90e92ff109cd1dc8ad594.mockapi.io/shop/' + params.id;

      console.log(url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setShop(data);
        });
    } else {
      let initData = {};
      setShop(initData);
    }
  }, []);

  const handleChange = (event) => {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log(name);
    let data = { ...shop };
    data[name] = value;

    if (name == 'gender') {
      data[name] = str2bool(value);
      console.log('gender');
      console.log(data[name]);
    }

    console.log(data);
    setShop(data);
  };

  const handleChangeHome = (event) => {
    //console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(name);
    console.log(value);
    let data = { ...shop };
    data.shop[name] = value;

    console.log(data);
    setShop(data);
  };

  const saveProduct = () => {
    console.log('save data', shop);
    let method = 'POST';
    let id = '';
    if (shop.id) {
      method = 'PUT';
      id = shop.id;
    }

    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(shop),
    };
    fetch(
      'https://62b90e92ff109cd1dc8ad594.mockapi.io/shop/' + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        //var date = new Date(data.dob);
        //data.dob = date.getTime();

        console.log(data);
        navigate(-1);
      });
  };

  return (
    <>
      {shop != null ? (
        <div class="container bootstrap snippets bootdey">
          <div class="panel-body inf-content">
            <div class="row">
              <div class="col-md-6">
                <strong>EDIT Your Information</strong>
                <br />
                <div class="table-responsive">
                  <table class="table table-user-information">
                    <tbody>
                      <tr>
                        <td>
                          <strong>ID</strong>
                        </td>
                        <td class="text-primary">{shop.id}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>title</strong>
                        </td>

                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={shop.title}
                            name="title"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Price</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={shop.Price}
                            name="lastName"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Categories</strong>
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={shop.category}
                            name="email"
                            onChange={(e) => handleChange(e)}
                          ></input>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Picture</strong>
                        </td>
                        <td class="text-primary">
                          <img src={shop.picture} className="img-circle" />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Date Of Birth</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => saveProduct()}
                    >
                      Save
                    </button>
                    <span> </span>
                    <Link to="/">
                      <button type="button" class="btn btn-secondary">
                        Cancel
                      </button>
                    </Link>
                  </div>
                </div>
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

export default AddNew;
