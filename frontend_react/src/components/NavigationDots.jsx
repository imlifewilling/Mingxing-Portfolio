import React from 'react';

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {
            ['home', 'about', 'projects', 'skills', 'certifications', 'contact'].map(
                (item, index) => (
                    <a href = {`#${item}`} 
                        style = {active === item ? {backgroundColor : '#313BAC'} : { }}
                        key = {item + index}
                        className = 'app__navigation-dot'
                    />
                )
            )
        }
    </div>
  )
};

export default NavigationDots;