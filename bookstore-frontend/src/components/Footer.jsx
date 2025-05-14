import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaAddressBook } from 'react-icons/fa';
import { CgWebsite } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row gy-4 align-items-start text-center text-md-start">
          {/* Logo and Description */}
          <div className="col-md-6">
            <h4 className="mb-3">
              <span className="text-success fw-bold">Book</span>
              <span className="text-white">Store</span>
            </h4>
            <p className="text-secondary">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate.
            </p>
            {/* Social Icons */}
            <div className="d-flex justify-content-center justify-content-md-start mt-3 gap-3">
              <a href="https://github.com/KaleemAkhtarKhan" className="text-light fs-5"><FaGithub /></a>
              <a href="https://linktr.ee/kaleemakhtarkhan" className="text-light fs-5"><CgWebsite /></a>
              <a href="#" className="text-light fs-5"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/kaleem-akhtar-khan-3075092b6/" className="text-light fs-5"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-6">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled text-secondary">
              <li><strong>Email:</strong> support@bookplace.com</li>
              <li><strong>Phone:</strong> +123 456 7890</li>
              <li><strong>Location:</strong> Lucknow, INDIA</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary mt-4" />

        <div className="text-center text-secondary small">
          &copy; {new Date().getFullYear()} BookStore. Powered by KaleemAkhtar / DevTeam
        </div>
        <li className="text-center text-secondary small">made with love and chai </li>
      </div>
    </footer>
  );
};

export default Footer;
