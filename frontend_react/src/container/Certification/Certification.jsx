import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';


import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';

import './Certification.scss';

const Certification = () => {
  const [certifications, setCertifications] = useState([]);

  return (
    <>
      <h2 className='head-text'>Certifications</h2>  
    </>
  )
};

export default AppWrap(
  MotionWrap(Certification, 'app_certifications'), 
  'certification',
  'app__primarybg'
);