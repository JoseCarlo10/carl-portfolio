import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_bklr3ml', 'template_p2kqthb', {
      from_name: name,
      reply_to: email,
      message,
    }, '7TQx6j0a7NbPtBkKw')
    
    .then((response) => {
      console.log('Message sent successfully!', response.status, response.text);
      alert('Your message has been sent successfully!');

      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      console.error('Failed to send message. Error:', err);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Email: josecarlomanlagnitavila10@gmail.com</p>
      <p>Phone: (+63) 9277676675</p>
      <p>Location: Catanduanes, Philippines</p>
      
      <p>Connect with me on social media:</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/jose-carlo-avila-27526b267/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/JoseCarlo10" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
