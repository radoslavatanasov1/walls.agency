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
      className="hero-section relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container relative z-10 mx-auto text-center px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Innovating the Future with <span className="text-[#ff79c6]">Code</span> & <span className="text-[#ff79c6]">Blockchain</span>
          </h1>
          <p
            className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Full-Stack Development and Blockchain Solutions designed to elevate your business.
          </p>
          <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="300">
            <a
              href="#services"
              className="btn btn-primary btn-lg text-white bg-[#ff79c6] hover:bg-[#ff6ec7] px-8 py-4 rounded-full transition-transform transform hover:scale-105 shadow-lg"
            >
              Discover Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
