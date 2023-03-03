import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './About.scss';

// const abouts = [
//   {title: 'Web development', description: 'I am an experienced web developer', imgUrl: images.about01},
//   {title: 'Full Stack Development', description: 'I am an experienced full stack developer', imgUrl: images.about02},
//   {title: 'Data', description: 'I have expereince with SQL', imgUrl: images.about03},
//   {title: 'Scientific Research', description: 'I am an experienced sicentist', imgUrl: images.about04}
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data))
  }, [])
  

  return (
    <>
      <h2 className='head-text'>
        "Anything’s possible if you've got have enough nerve."
        - <span style={{ color: '#2E86C1' }}>J.K. Rowling</span>
      </h2>

      <div className='app__profiles'>
        {
          abouts.map((about, index) => (
            <motion.div
              whileInView = {{ opacity : 1}}
              whileHover = {{ scale: 1.1 }}
              transition = {{ duration: 0.5, type: 'teween' }}
              className = 'app__profile-item'
              key = {about.title + index}
            >
              <img src = {urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
              <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  )
};

export default AppWrap(About, 'about');