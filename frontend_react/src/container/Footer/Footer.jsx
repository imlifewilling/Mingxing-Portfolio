import React, { useState } from 'react';
import {send} from 'emailjs-com';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ from_name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { from_name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_User_ID
    ).then((response) => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
    })
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.resumepg} alt="resumepg" />
          <a href = {images.Resume} download="Mingxing Li_Resume" className="p-text">Resume</a>
        </div>
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:lmx4wo@gmail.com" className="p-text">lmx4wo@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (865) 456-7848" className="p-text">+1 (865) 456-7848</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="from_name" value={from_name} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  "app__whitebg"
);