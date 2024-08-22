import React from 'react';

const Partners = () => {
  return (
    <section id="partners" className="py-10 bg">
      <div className="overflow-hidden rounded-lg bg-base-200 p-4">
        <div className="flex items-center justify-between animate-marquee space-x-12">
          {/* Repeat these blocks for each partner */}
          <div className="flex-shrink-0 flex items-center space-x-4 p-4 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Partner 1 Logo" className="h-12 w-auto" />
            <span className="text-lg text-gray-600">Partner 1</span>
          </div>
          <div className="flex-shrink-0 flex items-center space-x-4 p-4 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Partner 2 Logo" className="h-12 w-auto" />
            <span className="text-lg text-gray-600">Partner 2</span>
          </div>
          <div className="flex-shrink-0 flex items-center space-x-4 p-4 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Partner 3 Logo" className="h-12 w-auto" />
            <span className="text-lg text-gray-600">Partner 3</span>
          </div>
          <div className="flex-shrink-0 flex items-center space-x-4 p-4 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Partner 4 Logo" className="h-12 w-auto" />
            <span className="text-lg text-gray-600">Partner 4</span>
          </div>
          {/* Repeat the blocks for more partners */}
        </div>
      </div>
    </section>
  );
};

export default Partners;
