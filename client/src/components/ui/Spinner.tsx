import React from 'react';
import '../../assets/styles/ui/Spinner.css';

const Spinner: React.FC = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Spinner;
