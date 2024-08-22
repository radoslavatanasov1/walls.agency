import React from 'react';
import RadoslavA from '../assets/RadoslavA.png'; // Import Radoslav's image
import IbrahimK from '../assets/IbrahmiK.png'; // Import Ibrahim's image
import thomson from '../assets/thomson.png'; // Import Ibrahim's image

const Team = () => {
  // Calculate the total years of experience
  const totalExperience = 3 + 6 + 4 + 3;

  return (
    <section id="team" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">Our Team</h2>
        <p className="mb-12 text-lg text-gray-300">
          Meet the talented individuals behind Walls Agency. Our team consists of skilled developers, blockchain experts, and creative designers committed to delivering the best results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="card w-full bg-base-100 shadow-xl transform transition-transform hover:scale-105 hover:shadow-pulse rounded-lg">
            <figure className="px-10 pt-10">
              <img src={RadoslavA} alt="Radoslav A." className="rounded-full w-24 h-24" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h3 className="card-title">Radoslav A.</h3>
              <p>Fullstack + Blockchain Dev</p>
              <p>3 Years Experience</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="card w-full bg-base-100 shadow-xl transform transition-transform hover:scale-105 hover:shadow-pulse rounded-lg">
            <figure className="px-10 pt-10">
              <img src={IbrahimK} alt="Ibrahim K." className="rounded-full w-24 h-24" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h3 className="card-title">Ibrahim K.</h3>
              <p>Fullstack Dev</p>
              <p>6 Years Experience</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="card w-full bg-base-100 shadow-xl transform transition-transform hover:scale-105 hover:shadow-pulse rounded-lg">
            <figure className="px-10 pt-10">
            <img src={thomson} alt="Ibrahim K." className="rounded-full w-24 h-24" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h3 className="card-title">Thomson A.</h3>
              <p>Fullstack Dev</p>
              <p>4 Years Experience</p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="card w-full bg-base-100 shadow-xl transform transition-transform hover:scale-105 hover:shadow-pulse rounded-lg">
            <figure className="px-10 pt-10">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Maxim I." className="rounded-full w-24 h-24" />
            </figure>
            <div className="card-body items-center text-center text-white">
              <h3 className="card-title">Maxim I.</h3>
              <p>Graphic Designer</p>
              <p>3 Years Experience</p>
            </div>
          </div>
        </div>

        {/* Total Years of Experience */}
        <div className="mt-16 text-white text-4xl md:text-5xl font-extrabold">
          <p>Total <span className="text-primary">{totalExperience} Years</span> of Experience!</p>
        </div>
      </div>
    </section>
  );
}

export default Team;
