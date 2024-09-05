'use client';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const WaitlistForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      setMessage('Please fill out all fields.');
      return;
    }

    try {
      await addDoc(collection(db, 'Waitlist'), {
        firstName,
        lastName,
        email,
      });

      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('You have successfully joined the waitlist!');

    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="input-class"
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="input-class"
        required
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-class"
        required
      />
      <button type="submit" className="buttonList">Join the Waitlist</button>
      {message && <p className="text-center mt-4">{message}</p>}
    </form>
  );
};

export default WaitlistForm;
