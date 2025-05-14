import React, { useState, useEffect } from 'react';

const Home = () => {
  const [books, setBooks] = useState([]);

  return (
    <div className="container py-5 text-white">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h6 className="text-warning">How It Started</h6>
          <h1 className="fw-bold mb-3">Our Dream is Global Learning Transformation</h1>
          <p>
            Kawruh was founded by Robert Anderson and Maria Sanchez with a shared dream to create
            a digital haven of accessible knowledge. Their vision united a team of passionate
            educators to launch this platform — empowering learners everywhere.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src="src/assets/hhi.jpg"
            alt="Founders"
            className="img-fluid rounded mb-3"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
          <div className="bg-light text-dark p-3 rounded d-flex flex-wrap justify-content-around">
            <div className="p-2 text-center"><strong>3.5</strong><br />Years Experience</div>
            <div className="p-2 text-center"><strong>23</strong><br />Project Challenges</div>
            <div className="p-2 text-center"><strong>830+</strong><br />Positive Reviews</div>
            <div className="p-2 text-center"><strong>100K</strong><br />Trusted Students</div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-5">
        <h6 className="text-primary text-center">Meet the Team</h6>
        <h2 className="fw-bold mb-4 text-center">Meet Our Dedicated Team of Educators and Innovators</h2>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-6 col-lg-5 mb-4">
            <div className="bg-light p-4 rounded text-dark text-center h-100">
              <img
                src="src/assets/hhi.jpg"
                alt="Maria Sanchez"
                className="img-fluid rounded"
                style={{
                  aspectRatio: '2 / 3',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  maxHeight: '400px'
                }}
              />
              <h5 className="mt-3">Maria Sanchez</h5>
              <p className="text-muted">Chief Product Officer</p>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-5 mb-4">
            <div className="bg-light p-4 rounded text-dark text-center h-100">
              <img
                src="src/assets/hhi.jpg"
                alt="Robert Anderson"
                className="img-fluid rounded"
                style={{
                  aspectRatio: '2 / 3',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  maxHeight: '400px'
                }}
              />
              <h5 className="mt-3">Robert Anderson</h5>
              <p className="text-muted">Co-Founder & Educator</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="row text-dark mb-5">
        <div className="col-md-6 mb-4">
          <div className="bg-light p-4 rounded h-100">
            <h6 className="text-warning">Our Vision</h6>
            <h5>Empowering Lives Through Education</h5>
            <p>
              Our vision is to empower lives through accessible, high-quality education. By fostering
              a global community of lifelong learners, we aim to inspire personal growth, drive innovation,
              and shape a brighter future for all.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="bg-light p-4 rounded h-100">
            <h6 className="text-warning">Our Mission</h6>
            <h5>Learning for All, Everywhere</h5>
            <p>
              Our mission is to make learning universally available and impactful. Through scalable
              learning solutions, we provide opportunities to grow, explore, and achieve — no matter
              where you are.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Books */}
      <div>
        <h3 className="mt-5 mb-4 text-center">Featured Books</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {books.length === 0 ? (
            <p className="text-light text-center">No books available right now.</p>
          ) : (
            books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card h-100 text-dark">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <p><strong>Price:</strong> {book.price} USD</p>
                    <a href={`/book/${book.id}`} className="btn btn-dark">View Details</a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
