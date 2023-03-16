import React from 'react';

import {About, Footer, Header, Skills, Projects, Certification} from './container';
import {Navbar} from './components';
import './APP.scss';

const APP = () => {
  return (
    <div className = 'app'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Certification />
      <Footer />
    </div>
  )
};

export default APP;