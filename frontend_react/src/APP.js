import React from 'react';

import {About, Footer, Header, Skills, Testimonial, Work} from './container'
import {Navbar} from './components';

const APP = () => {
  return (
    <div className = 'app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
};

export default APP;