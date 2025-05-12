import React from 'react';
import './book.css';

const Book = () => {
  return (
    <div className="container py-4">
      <div className="row g-4 justify-content-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((id) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={id}>
            <div className="card book-card text-center">
              <img
                src={`https://picsum.photos/200?random=${id}`}
                className="card-img-top book-img"
                alt="Book"
              />
              <div className="card-body p-2">
                <h6 className="card-title mb-1">Book Title {id}</h6>
                <p className="card-text text-muted small">Quick description</p>
                <button className="btn btn-sm btn-primary w-100">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
