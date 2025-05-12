import React from 'react';

const BuyBook = () => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Books Available to Buy</h2>
      <div className="row g-4">
        {[1, 2, 3, 4].map((id) => (
          <div className="col-6 col-md-3" key={id}>
            <div className="card h-100">
              <img src={`https://picsum.photos/200?random=${id}`} className="card-img-top" alt="Book" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Book Title {id}</h5>
                <p className="card-text small">Author Name</p>
                <p className="card-text fw-bold">$10.00</p>
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
