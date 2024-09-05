'use client';
import WaitlistForm from './WaitlistForm';

const WaitlistModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-header">
          Join the Waitlist
          <span className="modal-close" onClick={onClose}>X</span>
        </div>
        <div className="modal-body">
          <p>Enter your details to join the waitlist today!</p>
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};
     
export default WaitlistModal;
