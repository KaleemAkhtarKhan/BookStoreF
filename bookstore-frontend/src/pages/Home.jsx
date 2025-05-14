import React, { useState, useEffect } from 'react';

const Home = () => {
  const [books, setBooks] = useState([]);

  return (
    <div className="container py-5 text-white">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <h6 className="text-warning">How It Started</h6>
          <h1 className="fw-bold mb-3">Turning Passion for Knowledge into a Platform for All</h1>
          <p>
            <span className="text-success fw-bold">📚Book</span>
              <span className="text-white">Nerds</span> was founded by Kaleem Akhtar Khan and Hemant Kumar, two passionate Computer Science engineering students with a shared vision for transforming education through technology. As aspiring software engineers, we witnessed the barriers students face when trying to access quality learning resources — from limited availability to affordability and reach.

            Driven by our belief in the power of education to uplift and empower, we set out to create a platform that bridges these gaps. <span className="text-success fw-bold">📚Book</span>
              <span className="text-white">Nerds</span> was born from countless late-night brainstorming sessions, lines of code, and a commitment to making learning simple, engaging, and accessible for everyone — no matter where they are.

            Today, <span className="text-success fw-bold">📚Book</span>
              <span className="text-white">Nerds</span> stands as a growing digital learning hub — built by students, for students — with the goal of connecting learners worldwide through books, community, and opportunity. Our journey has just begun, and we’re excited to continue shaping the future of education.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <img
            src="src/assets/manpic.jpg"
            alt="Founders"
            className="img-fluid rounded mb-3"
            style={{ maxHeight: '500px', objectFit: 'cover', boxShadow: '0 0.1px 18px rgba(37, 110, 8, 0.9)' }}
          />
          <div className="bg-light text-dark p-3 rounded d-flex flex-wrap justify-content-around">
            <div className="p-2 text-center"><strong>5,000+</strong><br /> Books Available</div>
            <div className="p-2 text-center"><strong>1,200+</strong><br /> Verified Reviews</div>
            <div className="p-2 text-center"><strong>20,000+</strong><br /> Book Lovers Served</div>
            <div className="p-2 text-center"><strong>100K</strong><br />Trusted Students</div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-5">
        <h6 className="text-primary text-center">The Visionaries Behind <span className="text-success fw-bold">Book</span>
          <span className="text-white">Nerds</span></h6>
        <h2 className="fw-bold mb-4 text-center">Meet the Developers Behind <span className="text-success fw-bold">Book</span>
          <span className="text-white">Nerds</span> – Delivering a Robust Online Marketplace for Buying and Selling Books</h2>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-6 col-lg-5 mb-4">
            <div className="bg-light p-4 rounded text-dark text-center h-100">
              <img
                src="src/assets/hhi.jpg"
                alt="Kaleem Akhtar Khan"
                className="img-fluid rounded"
                style={{
                  aspectRatio: '2 / 3',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  maxHeight: '400px'
                }}
              />
              <h5 className="mt-3">Kaleem Akhtar Khan</h5>
              <p className="text-muted">Software Engineer</p>
              <p className="text-muted">Founder & CEO</p>
              <a
                href="https://www.linkedin.com/in/kaleem-akhtar-khan-3075092b6/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-2 d-flex align-items-center justify-content-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  style={{ width: '20px', height: '20px' }}
                />
                LinkedIn
              </a>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-5 mb-4">
            <div className="bg-light p-4 rounded text-dark text-center h-100">
              <img
                src="src/assets/hhi.jpg"
                alt="Hemant Kumar"
                className="img-fluid rounded"
                style={{
                  aspectRatio: '2 / 3',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  maxHeight: '400px'
                }}
              />
              <h5 className="mt-3">Hemant Kumar</h5>
              <p className="text-muted">Software Engineer</p>
              <p>Co-founder</p>
              <a
                href="https://www.linkedin.com/in/hemant-kumar-33b14b24b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary mt-2 d-flex align-items-center justify-content-center gap-2"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  style={{ width: '20px', height: '20px' }}
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="row text-dark mb-5">
        <div className="col-md-6 mb-4">
          <div className="bg-light p-4 rounded h-100">
            <h6 className="text-warning">Our Vision</h6>
            <h5>Reimagining Learning for the Digital Generation</h5>
            <p>
              Our vision is to revolutionize the way people access knowledge by building a powerful, technology-driven platform where books, learning, and community come together. We strive to make education universally accessible and deeply engaging by combining the timeless value of books with modern digital innovation. Through our platform, we aim to connect passionate learners, curious minds, and knowledge seekers with a vast and diverse library of educational resources, expert insights, and a vibrant global community. We envision a world where anyone—regardless of their background or location—can unlock their full potential through the power of books, personalized online learning, and meaningful human connection. Together, we are shaping the future of education, one page, one lesson, and one learner at a time.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="bg-light p-4 rounded h-100">
            <h6 className="text-warning">Our Mission</h6>
            <h5>From Passion to Progress — Fueling Lifelong Learning.</h5>
            <p>
              Our mission is to make quality education and knowledge accessible to everyone by offering a seamless platform for discovering, buying, and sharing books. We are committed to empowering learners through affordable access to diverse resources, fostering a culture of continuous growth, and supporting both readers and educators in their journey toward lifelong learning. By blending technology with human insight, we aim to create an inclusive, supportive, and inspiring environment for learners across the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
