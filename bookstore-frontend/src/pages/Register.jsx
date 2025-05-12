import React, { useState } from 'react';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
       name: fullName,
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setMessage('Registration successful!');
        setFullName('');
        setEmail('');
        setPassword('');
      } else {
        const errorData = await response.json();
        setMessage(`Registration failed: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      setMessage('Error connecting to server.');
    }
  };

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
      <h3 className="mb-3 text-center">Register</h3>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;
