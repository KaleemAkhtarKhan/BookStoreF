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

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Books Available to Buy</h2>
      {message && <p className="text-danger text-center">{message}</p>}
      <div className="row g-4">
        {books.map((book) => (
          <div className="col-6 col-md-3" key={book.id}>
            <div className="card h-100">
              <img
                src={book.imageUrl || 'https://via.placeholder.com/150'}
                className="card-img-top"
                alt={book.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text small">{book.author}</p>
                <p className="card-text fw-bold">${book.price}</p>
                <button className="btn btn-sm btn-success mt-auto">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyBook;
