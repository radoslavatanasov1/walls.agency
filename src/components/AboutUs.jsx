import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-6">About Us</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          At Walls Agency, we are dedicated to providing top-notch full-stack development and blockchain solutions.
          Our team is passionate about delivering innovative and scalable solutions that meet your business needs.
        </p>
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2 bg-primary p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>
              To empower businesses with cutting-edge technology solutions that drive growth and success.
              We believe in pushing the boundaries of innovation to deliver products that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
