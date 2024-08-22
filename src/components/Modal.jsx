import React from 'react';

const Modal = ({ member, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-base-100 p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="text-center">
          <img src={member.image} alt={member.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
          <p className="text-lg text-primary mb-4">{member.role}</p>
          <p className="text-gray-300">{member.experience}</p>
          <p className="text-gray-300 mt-4">{member.details}</p>
          <button onClick={onClose} className="mt-6 btn btn-primary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
