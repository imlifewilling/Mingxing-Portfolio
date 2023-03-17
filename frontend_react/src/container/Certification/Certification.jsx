import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

import {AppWrap, MotionWrap} from '../../wrapper';
import {urlFor, client} from '../../client';

import {images} from '../../constants';

import './Certification.scss';

const Certification = () => {
  // const [certifications, setCertifications] = useState([]);
  const [certificationlist, setCertificationlist] = useState([])

  useEffect(() => {
    // const query = '*[_type == "certifications"]';
    const certificationlistQuery = '*[_type == "certificationlist"]';

    // client.fetch(query)
    // .then((data) => {
    //   setCertifications(data)})

      client.fetch(certificationlistQuery)
    .then((data) => {
      setCertificationlist(data)})
  }, [])

  // console.log(certificationlist)

  return (
    <>
      <h2 className='head-text'>Certifications</h2>  
      <div className='app__certifications-container'>
        {
          certificationlist.map((item) => (
            item.certifications.map((certification, index)=>(
              // console.log(certification)

              // <motion.div >
                  <div 
                    className = 'app__certification-container'
                    key = {certification.name+index}
                  >
                    <div className='img-container'>
                        <img className = 'certificationlogo' src = {urlFor(certification.icon)} alt = {certification.name} />   
                    </div>
                    
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__certification"
                    >
                        <div>
                          <h4 className="bold-text">{certification.name}</h4>
                        </div>
                        <div className = 'certification-detail'>
                            <div>
                                <p className="p-text">{certification.issuecompany}</p>
                                <p className="p-text">{certification.year}</p>
                            </div>
                            {
                              certification.certificationLink ? 
                              <div className='certification-link'>
                                <a className = 'certification-c-info' href={certification.certificationLink} target = '_blank' rel="noreferrer">
                                    <p className='ptext'>Show Credential</p> 
                                    <img className ='companyicon' src={images.linkicon} alt = 'linkicon' />
                                </a>
                              </div> :
                              <></>
                            }                         
                        </div>
                    </motion.div>
                  </div>    
            // </motion.div>
            ))

            // })
          ))
        }
      </div>
    </>
  )
};

export default AppWrap(
  MotionWrap(Certification, 'app_certifications'), 
  'certifications',
  'app__primarybg'
);