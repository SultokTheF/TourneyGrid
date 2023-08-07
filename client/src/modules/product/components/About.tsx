import React from "react";

import ProductInfo from "../../../store/ProductInfo";

import Footer from '../../../components/layouts/Footer';

import '../assets/product.css';

const About: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="about-content">
          <h1>{ ProductInfo.name }</h1> 
          <p>
            { ProductInfo.description }
          </p>
          <p>
            { ProductInfo.mission }
          </p>

          <h1>Main features of this project</h1>

          <ol>
            { ProductInfo.features.map(f => (
              <li>{ f }</li>
            )) }
          </ol>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;