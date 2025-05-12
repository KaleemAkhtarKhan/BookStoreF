import React, { useState } from 'react';

const SellBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Sending data to backend
    try {
      const response = await fetch('http://localhost:8080/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Book listed for sale successfully!');
        // Optionally reset the form after success
        setFormData({
          title: '',
          author: '',
          price: '',
          description: '',
        });
      } else {
        setMessage('Failed to list the book. Please try again.');
      }
    } catch (error) {
      console.error('Error listing book:', error);
      setMessage('An error occurred while listing the book.');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Sell Your Book</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={handleChange}
            value={formData.title}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            onChange={handleChange}
            value={formData.author}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price ($)</label>
          <input
            type="number"
            className="form-control"
            name="price"
            onChange={handleChange}
            value={formData.price}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            onChange={handleChange}
            value={formData.description}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
      {message && <p className="mt-3 text-center text-success">{message}</p>}
    </div>
  );
};

export default SellBook;
