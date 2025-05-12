import React, { useState, useEffect } from 'react';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/books');
        if (response.ok) {
          const booksData = await response.json();
          setBooks(booksData);
        } else {
          console.error('Failed to fetch books');
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="text-center text-white">
      <h1 className="display-4 fw-bold mb-4">Welcome to BookStore</h1>
      <p className="lead">Buy and sell your favorite books online.</p>

      <h3 className="mt-5">Featured Books</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {books.length === 0 ? (
          <p></p>
        ) : (
          books.map((book) => (
            <div className="col" key={book.id}>
              <div className="card text-dark">
                <img src={book.coverImage} alt={book.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.description}</p>
                  <p className="card-text"><strong>Price: </strong>{book.price} USD</p>
                  <a href={`/book/${book.id}`} className="btn btn-dark">View Details</a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
