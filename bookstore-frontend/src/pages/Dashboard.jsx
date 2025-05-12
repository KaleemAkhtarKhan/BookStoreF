
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './dashboard.css';

// const Dashboard = () => {
//   const [books, setBooks] = useState([]);

//   // Fetch books from the backend
//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/api/books');
//         if (response.ok) {
//           const data = await response.json();
//           setBooks(data);
//         } else {
//           console.error('Error fetching books');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <div className="container py-4">
//       <div className="row">
//         <div className="col-12 mb-4">
//           {/* Nav Buttons */}
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <div className="container-fluid">
//               <Link className="navbar-brand" to="/dashboard">Dashboard</Link>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarNav">
//                 <ul className="navbar-nav ms-auto">
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/buy">Buy Books</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/sell">Sell Books</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/cart">Cart</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>

//         <div className="col-12">
//           {/* Book Cards */}
//           <h2 className="text-center mb-4">Books Available</h2>
//           <div className="row g-4">
//             {books.map((book) => (
//               <div className="col-6 col-md-3" key={book.id}>
//                 <div className="card h-100">
//                   <img src={book.imageUrl || 'https://via.placeholder.com/200'} className="card-img-top" alt={book.title} />
//                   <div className="card-body d-flex flex-column">
//                     <h5 className="card-title">{book.title}</h5>
//                     <p className="card-text small">{book.description}</p>
//                     <button className="btn btn-primary mt-auto">Buy</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
