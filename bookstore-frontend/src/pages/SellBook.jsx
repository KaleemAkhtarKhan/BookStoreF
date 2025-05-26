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

  // Improved regex for more flexible Google Drive links
  const convertDriveLink = (url) => {
    const match = url.match(/\/file\/d\/([^/]+)\//);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
    return url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken');
    if (!token) {
      setMessage('You must be logged in to sell a book.');
      return;
    }

    const imageUrl = convertDriveLink(formData.imageUrl);

    try {
      const response = await fetch('http://localhost:8080/api/books/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          imageUrl,
          price: parseFloat(formData.price),
          stock: parseInt(formData.stock),
        }),
      });

      if (response.ok) {
        setMessage('✅ Book listed for sale successfully!');
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
        setMessage(`❌ Failed to list the book: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('Error listing book:', error);
      setMessage('❌ An error occurred while listing the book.');
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Sell Your Book</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input type="text" className="form-control" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" className="form-control" name="author" value={formData.author} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Price (₹)</label>
          <input type="number" step="0.01" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            className="form-control"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
          <div className="form-text">For local file Use https://postimages.org to generate link </div>

          {formData.imageUrl && (
            <div className="mt-3 text-center">
              <img
                src={convertDriveLink(formData.imageUrl)}
                alt="Preview"
                style={{ maxHeight: '200px', objectFit: 'contain', borderRadius: '8px' }}
                onError={(e) => {
                  e.target.src = '';
                  e.target.alt = '⚠️ Image could not be loaded. Check your link or sharing permissions.';
                }}
              />
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input type="text" className="form-control" name="category" value={formData.category} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" name="stock" value={formData.stock} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>

      {message && (
        <div className="mt-3 alert alert-info text-center">
          {message}
        </div>
      )}
    </div>
  );
};

export default SellBook;
