import React from 'react';

import { ProductInfo } from '../../modules/product';

import '../../assets/styles/layouts/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          {/* Add your contact information here */}
          <p>Email: { ProductInfo.email }</p>
          <p>Phone: { ProductInfo.phoneNumber }</p>
          <p>Addess: { ProductInfo.address }</p>
          {/* Add more contact information as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
