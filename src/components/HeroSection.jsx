import React from 'react';
import backgroundImage from '../assets/iamge.jpg'; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary">
            Innovating the Future with Code & Blockchain
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Full-Stack Development and Blockchain Solutions designed to elevate your business.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="#services" className="btn btn-primary btn-lg">
              Discover Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
