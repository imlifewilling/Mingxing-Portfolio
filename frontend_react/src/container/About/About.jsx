import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';


import './About.scss';

const abouts = [

]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        "Anything’s possible if you've got have enough nerve."
        - <span>J.K. Rowling</span>
      </h2>

      <div className='app_profiles'>
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView = {{ opacity : 1}}
              whileHover = {{ scale: 1.1 }}
              transition = {{ duration: 0.5, type: 'teween' }}
              className = 'app__profile-item'
              key = {about.title + index}
            >
              <img src = {about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
};

export default About;