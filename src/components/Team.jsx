import React, { useState } from 'react';
import RadoslavA from '../assets/RadoslavA.png';
import IbrahimK from '../assets/IbrahmiK.png';

const teamMembers = [
  {
    name: "Radoslav A.",
    role: "Fullstack + Blockchain Dev",
    experience: "3 Years Experience",
    image: RadoslavA,
    details: "Radoslav is a skilled Fullstack Developer with a strong focus on blockchain technology. He has been in the industry for 3 years and has contributed to several successful projects.",
    portfolio: "https://radoslav.site/",
    agency: "https://walls.agency/",
  },
  {
    name: "Ibrahim K.",
    role: "Fullstack Dev",
    experience: "6 Years Experience",
    image: IbrahimK,
    details: "Ibrahim has over 6 years of experience as a Fullstack Developer. His expertise spans both front-end and back-end technologies, making him a versatile and valuable team member.",
    projects: [
      { name: "GDN Solution", url: "https://gdnsolution.com" },
      { name: "Alpha Cargo Line", url: "https://alphacargoline.com" },
      { name: "Harmoni Jaa", url: "https://harmonijaa.lv" },
      { name: "Conscious Leap", url: "https://consciousleap.co" },
      { name: "Taya Living", url: "https://tayaliving.com" },
      { name: "Vi Watch AI", url: "https://viwatchai.com" },
      { name: "Buati Price", url: "https://buatiprice.com" },
    ],
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="py-20 bg-neutral" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">Our Team</h2>
        <p className="mb-12 text-lg text-gray-300">
          Meet the talented individuals behind Walls Agency. Our team consists of skilled developers, blockchain experts, and creative designers committed to delivering the best results.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative card w-full bg-base-100 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-pulse rounded-lg overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <figure className="flex justify-center items-center px-10 pt-10">
                  <img src={member.image} alt={member.name} className="rounded-full w-24 h-24" />
                </figure>
                <div className="card-body flex flex-col items-center text-center text-white">
                  <h3 className="card-title">{member.name}</h3>
                  <p>{member.role}</p>
                  <p>{member.experience}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0 bg-neutral transition-all duration-300 ease-in-out hover:h-20 flex items-center justify-center">
                  <button
                    onClick={() => openModal(member)}
                    className="btn btn-outline border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
                  >
                    SHOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Years of Experience */}
        <div className="mt-16 text-white text-4xl md:text-5xl font-extrabold">
          <p>Total <span className="text-primary">9 Years</span> of Experience!</p>
        </div>
      </div>

      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-base-100 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <div className="text-center">
              <img src={selectedMember.image} alt={selectedMember.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
              <p className="text-lg text-primary mb-4">{selectedMember.role}</p>
              <p className="text-gray-300">{selectedMember.experience}</p>
              <p className="text-gray-300 mt-4">{selectedMember.details}</p>

              {/* Portfolio and Agency Links */}
              {selectedMember.portfolio && (
                <div className="mt-4">
                  <a href={selectedMember.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">
                    Portfolio
                  </a>
                </div>
              )}
              {selectedMember.agency && (
                <div className="mt-2">
                  <a href={selectedMember.agency} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">
                    Agency Website
                  </a>
                </div>
              )}

              {/* Display projects if available */}
              {selectedMember.projects && (
                <div className="mt-4">
                  <h4 className="text-xl font-semibold mb-2">Projects</h4>
                  <ul className="list-disc list-inside">
                    {selectedMember.projects.map((project, index) => (
                      <li key={index}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">
                          {project.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button onClick={closeModal} className="mt-6 btn btn-primary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
