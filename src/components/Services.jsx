import React from 'react';
import { FaCode, FaLock, FaPalette } from 'react-icons/fa'; // Importing some icons

const Services = () => {
  return (
    <section id="services" className="py-20 bg-neutral text-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div 
            id="fullstack" 
            className="p-6 bg-base-100 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-pulse"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex justify-center mb-4">
              <FaCode className="text-5xl text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Full Stack Development</h3>
            <p className="text-gray-400">We offer complete front-end and back-end development services using the latest technologies.</p>
          </div>
          <div 
            id="blockchain" 
            className="p-6 bg-base-100 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-pulse"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex justify-center mb-4">
              <FaLock className="text-5xl text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Blockchain Development</h3>
            <p className="text-gray-400">Our blockchain services include smart contract development, dApps, and consulting.</p>
          </div>
          <div 
            id="uiux" 
            className="p-6 bg-base-100 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-pulse"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex justify-center mb-4">
              <FaPalette className="text-5xl text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-400">Our design team creates intuitive and beautiful interfaces that enhance user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
