import React, { useEffect } from 'react';
import backgroundImage from '../assets/iamge.jpg'; // Adjust the path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      data-aos="fade-up"
    >
      <div className="container mx-auto text-center px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary" data-aos="fade-up" data-aos-delay="100">
            Innovating the Future with Code & Blockchain
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Full-Stack Development and Blockchain Solutions designed to elevate your business.
          </p>
          <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="300">
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
