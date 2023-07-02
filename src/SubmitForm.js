import React, { useContext, useState } from 'react';
import { UserContext } from './App';
import { useLocation, useNavigate } from 'react-router-dom';

const SubmitForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from :{pathname: "/recipe"}};
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    setLoggedInUser(email);
    history(from);
    console.log(from);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitForm;
