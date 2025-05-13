import React, { useState } from 'react';

const SellBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    description: '',
    imageUrl: '',
    category: '',
    stock: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Retrieve the JWT token from localStorage
    const token = localStorage.getItem('authToken');
    if (!token) {
      setMessage('You must be logged in to sell a book.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/books/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // ✅ Pass token correctly
        },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock),
        }),
      });

      if (response.ok) {
        setMessage('Book listed for sale successfully!');
        setFormData({
          title: '',
          author: '',
          price: '',
          description: '',
          imageUrl: '',
          category: '',
          stock: '',
        });
      } else {
        const errorText = await response.text();
        console.error('Failed to add book:', errorText);
        setMessage(`Failed to list the book: ${response.status} - ${errorText}`);
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
          <input type="text" className="form-control" name="title" onChange={handleChange} value={formData.title} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" className="form-control" name="author" onChange={handleChange} value={formData.author} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Price ($)</label>
          <input type="number" step="0.01" className="form-control" name="price" onChange={handleChange} value={formData.price} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" onChange={handleChange} value={formData.description} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="text" className="form-control" name="imageUrl" onChange={handleChange} value={formData.imageUrl} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input type="text" className="form-control" name="category" onChange={handleChange} value={formData.category} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" name="stock" onChange={handleChange} value={formData.stock} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
      {message && <p className="mt-3 text-center text-success">{message}</p>}
    </div>
  );
};

export default SellBook;
