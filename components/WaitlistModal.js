'use client';
import WaitlistForm from './WaitlistForm';

const WaitlistModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full relative">
          <button className="text-white absolute top-2 right-2" onClick={onClose}>X</button>
          <h2 className="text-2xl font-bold mb-4 text-white text-center">Join the Waitlist</h2>
          <WaitlistForm />
        </div>
      </div>
    );
};

export default WaitlistModal;
