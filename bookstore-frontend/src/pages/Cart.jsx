import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');

        const response = await fetch(`http://localhost:8080/api/cart/items?userId=${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          setMessage('Failed to load cart items.');
        }
      } catch (error) {
        setMessage('Error loading cart.');
      }
    };

    fetchCartItems();
  }, []);

  const updateQuantity = async (bookId, newQuantity) => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    try {
      const response = await fetch(`http://localhost:8080/api/cart/update?userId=${userId}&bookId=${bookId}&quantity=${newQuantity}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      if (response.ok) {
        const updatedItems = cartItems.map(item =>
          item.bookId === bookId ? { ...item, quantity: newQuantity } : item
        ).filter(item => item.quantity > 0);
        setCartItems(updatedItems);
      } else {
        setMessage("Failed to update quantity.");
      }
    } catch (error) {
      setMessage("Error updating quantity.");
    }
  };

  const removeItem = async (bookId) => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    try {
      const response = await fetch(`http://localhost:8080/api/cart/remove?userId=${userId}&bookId=${bookId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      if (response.ok) {
        setCartItems(cartItems.filter(item => item.bookId !== bookId));
      } else {
        setMessage("Failed to remove item.");
      }
    } catch (error) {
      setMessage("Error removing item.");
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Your Cart</h2>
      {message && <p className="text-danger text-center">{message}</p>}
      <ul className="list-group mb-4">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img
                src={item.imageUrl || 'https://via.placeholder.com/50'}
                alt={item.title}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <div>
                <h6 className="mb-1">{item.title}</h6>
                <div>Price: ${item.price?.toFixed(2)}</div>
                <div className="d-flex align-items-center mt-1">
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => updateQuantity(item.bookId, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >−</button>
                  <span>{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={() => updateQuantity(item.bookId, item.quantity + 1)}
                  >+</button>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-end">
              <span className="fw-bold">₹{(item.price * item.quantity).toFixed(2)}</span>
              <button
                className="btn btn-sm btn-danger mt-2"
                onClick={() => removeItem(item.bookId)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="text-end">
        <h5>Total: ${total.toFixed(2)}</h5>
        <button className="btn btn-primary mt-2">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
