import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions';

const Cart = (props) => {
  let navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    console.log('product list useEffect!!');
    setCartItems(props.store_state.Carts);
  }, [props.store_state]);

  const getTotal = () => {
    let sum = 0;
    for (let item of cartItems) {
      sum += item.Price * item.quantity;
    }
    return sum;
  };
  var carts_jsx = '';
  if (cartItems.length > 0) {
    carts_jsx = cartItems.map((item, key) => (
      <tr>
        <td>{key + 1}</td>
        <td>
          <button
            class="btn btn-sm"
            onClick={() => props.DecreaseQuantity(key)}
          >
            -
          </button>
          <input
            type="number"
            value={item.quantity}
            class="form-control-sm"
            style={{ width: '5em', min: '0' }}
          />
          <button
            class="btn btn-sm"
            onClick={() => props.IncreaseQuantity(key)}
          >
            +
          </button>
        </td>
        <td>{item.name}</td>
        <td class="text-right">${item.Price}</td>
        <td class="text-right">${item.Price * item.quantity}</td>
        <td class="text-center">
          <button class="btn btn-sm btn-danger">Remove</button>
        </td>
      </tr>
    ));
  }
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col mt-2">
          <h2 class="text-center">Your Cart</h2>
          <table class="table table-bordered table-striped p-2">
            <thead>
              <tr>
                <th>STT</th>
                <th>Quantity</th>
                <th>Product</th>
                <th class="text-right">Price</th>
                <th class="text-right">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length == 0 ? (
                <tr>
                  <td colspan="4" class="text-center">
                    Your cart is empty
                  </td>
                </tr>
              ) : (
                ''
              )}
              {carts_jsx}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-right">
                  Total:
                </td>
                <td class="text-right">${getTotal()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="text-center">
            <button class="btn btn-primary m-1">Continue Shopping</button>
            <button class="btn btn-danger m-1" type="button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  //  console.log(state)
  return {
    //items: state._todoProduct.Carts,
    store_state: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Cart);
