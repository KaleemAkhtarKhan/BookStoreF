import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Book from './pages/Book';
import SellBook from './pages/SellBook';
import BuyBook from './pages/BuyBook.jsx';
import Cart from './pages/Cart';
import ProtectedRoute from './components/ProtectedRoute'; 


const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1 container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book" element={<Book />} />
            {/* <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
              <Route path="/sell" element={<ProtectedRoute><SellBook /></ProtectedRoute>} />
        <Route path="/buy" element={<ProtectedRoute><BuyBook /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          </Routes>
        </main>ss
        <Footer />
      </div>
    </Router>
  );
};

export default App;