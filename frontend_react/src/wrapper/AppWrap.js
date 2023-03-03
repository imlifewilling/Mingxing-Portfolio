import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classdNames) => function HOC(){
  return (
    <div 
        id = {idName}
        className = {`app__container ${classdNames}`}
    >
        <SocialMedia />

        <div className='app__wrapper app__flex'>
            <Component />
            
            <div className='copyright'>
                <p className = 'p-text'>@2023 Mingxing</p>
            </div>
        </div>
        
        <NavigationDots active = {idName} />
    </div>
  )
};

export default AppWrap;