import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-neutral text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-[10px] text-white">Pricing</h1>
        <h5 className="text-base font-bold mb-10">
          <strong className="text-[#ff79c6]">My </strong> Price Board
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
          {/* Basic Website Package */}
          <div className="p-8 bg-base-100 shadow-lg rounded-3xl border-2 ">
            <h3 className="text-2xl font-semibold mb-4">Basic Website (HTML/CSS/JS)</h3>
            <p className="text-4xl font-bold text-white mb-6">
              399 <strong className="text-[#ff79c6]">€</strong>
            </p>
            <p className="text-gray-400 mb-4">
              Get a professional, responsive website with HTML, CSS, and JavaScript, perfect for small businesses like plumbers, electricians, and freelancers. Up to 5 custom pages to showcase your services and contact info, all for just 399 €.
            </p>
            <ul className="mb-6 text-center">
              <li className="flex justify-center items-center">
                <span className="text-pink-500 mr-2">✓</span> Web Development
              </li>
              <li className="flex justify-center items-center">
                <span className="text-pink-500 mr-2">✓</span> Code Review/Bug Fixing
              </li>
              <li className="text-gray-500">Backend Development</li>
              <li className="text-gray-500">Blockchain Solutions</li>
            </ul>
            <button className="btn btn-primary w-full rounded-full text-white">Start Project</button>
          </div>

          {/* Full-Stack Package */}
          <div className="p-8 bg-base-100 shadow-lg rounded-3xl border-2 border-[#ff79c6] relative">
          <div className="absolute top-[-15px] right-[30px] bg-[#ff79c6] text-white py-1 px-3 rounded-full text-sm font-bold">
            Popular
           </div>

            <h3 className="text-2xl font-semibold mb-4">Full-Stack</h3>
            <p className="text-4xl font-bold text-white mb-6">
              1200 <strong className="text-[#ff79c6]">€</strong>
            </p>
            <p className="text-gray-400 mb-4">
              This package includes full web development with a custom-designed, responsive front-end using HTML, TailwindCSS, and React.js, tailored specifically to your business needs. It also covers secure backend development, featuring database integration, user authentication, and server-side logic. You’ll receive up to 10 pages, contact forms, dynamic content management, and basic SEO optimization, providing a comprehensive and robust online presence.
            </p>
            <ul className="mb-6 text-center">
              <li className="flex justify-center items-center">
                <span className="text-pink-500 mr-2">✓</span> Web Development
              </li>
              <li className="flex justify-center items-center">
                <span className="text-pink-500 mr-2">✓</span> Code Review/Bug Fixing
              </li>
              <li className="flex justify-center items-center">
                <span className="text-pink-500 mr-2">✓</span> Backend Development
              </li>
              <li className="text-gray-500">Blockchain Solutions</li>
            </ul>
            <button className="btn btn-primary w-full rounded-full text-white">Start Project</button>
          </div>

          {/* Full-Stack + Blockchain Package */}
          <div className="p-8 bg-base-100 shadow-lg rounded-3xl border-2 ">
            <h3 className="text-2xl font-semibold mb-4">Full-Stack + Blockchain</h3>
            <p className="text-4xl font-bold text-white mb-6">
              4000 <strong className="text-[#ff79c6]">€</strong>
            </p>
            <p className="text-gray-400 mb-4">
              Get a fully responsive, custom website with secure backend development and blockchain integration. This package includes front-end design, database setup, and blockchain features like smart contracts or secure transactions, perfect for businesses aiming for innovation and security.
            </p>
            <ul className="mb-6 text-center">
              <li className="flex justify-center items-center">
                <span className="text-pink-500 mr-2">✓</span> Web Development
              </li>
              <li className="flex justify-center items-center">
                <span className="text-pink-500 mr-2">✓</span> Code Review/Bug Fixing
              </li>
              <li className="flex justify-center items-center">
                <span className="text-pink-500 mr-2">✓</span> Backend Development
              </li>
              <li className="flex justify-center items-center">
                <span className="text-pink-500 mr-2">✓</span> Blockchain Solutions
              </li>
            </ul>
            <button className="btn btn-primary w-full rounded-full text-white">Start Project</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
