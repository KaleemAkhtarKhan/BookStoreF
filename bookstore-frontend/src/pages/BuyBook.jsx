import React, { useEffect, useState } from 'react';

const BuyBook = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:8080/api/books/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        } else if (response.status === 403) {
          setMessage('Access denied. Please log in.');
        } else {
          setMessage('Failed to fetch books.');
        }
      } catch (error) {
        console.error('Error fetching books:', error);
        setMessage('An error occurred while loading books.');
      }
    };

    fetchBooks();
  }, []);

  const handleAddToCart = async (bookId) => {
    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');

    if (!token || !userId) {
      alert('You must be logged in to add to cart.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/cart/add?userId=${userId}&bookId=${bookId}&quantity=1`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        alert('Book added to cart!');
      } else {
        alert(data.message || 'Failed to add to cart.');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('An error occurred while adding to cart.');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Books Available to Buy</h2>
      {message && <p className="text-danger text-center">{message}</p>}
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {books.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 d-flex flex-column shadow-sm">
              <img
                src={book.imageUrl || 'https://via.placeholder.com/200x300'}
                className="card-img-top"
                alt={book.title}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text text-muted small mb-1">{book.author}</p>
                <p className="card-text fw-bold mb-2">${book.price}</p>
                <button
                  className="btn btn-sm btn-success mt-auto"
                  onClick={() => handleAddToCart(book.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyBook;
