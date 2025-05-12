import React from 'react';

const Cart = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Your Cart</h2>
      <ul className="list-group mb-4">
        {[1, 2].map(id => (
          <li key={id} className="list-group-item d-flex justify-content-between align-items-center">
            Book Title {id}
            <span>$10.00</span>
          </li>
        ))}
      </ul>
      <div className="text-end">
        <h5>Total: $20.00</h5>
        <button className="btn btn-primary mt-2">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
