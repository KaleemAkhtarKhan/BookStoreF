import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        // Save token to local storage
        localStorage.setItem('authToken', data.token); // Save token for future requests
        localStorage.setItem('isLoggedIn', 'true');
        // setIsLoggedIn(true);
        setMessage('Login successful!');
      } else {
        const errorData = await response.json();
        setMessage(`Login failed ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      setMessage('Error connecting to server.');
    }
  };

  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
      <h3 className="mb-3 text-center">Login</h3>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
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
        <button type="submit" className="btn btn-dark w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;