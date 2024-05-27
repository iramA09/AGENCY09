import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// AOS
import Aos from 'aos'
import 'aos/dist/aos.css'
// AOS End

import lifeata09_1 from '../Assets/Images/lifeata09/1.jpg';
import lifeata09_2 from '../Assets/Images/lifeata09/2.jpg';
import lifeata09_3 from '../Assets/Images/lifeata09/3.jpg';
import lifeata09_4 from '../Assets/Images/lifeata09/4.jpg';
import lifeata09_5 from '../Assets/Images/lifeata09/5.jpg';
import lifeata09_6 from '../Assets/Images/lifeata09/6.jpg';
import lifeata09_7 from '../Assets/Images/lifeata09/7.jpg';
import lifeata09_8 from '../Assets/Images/lifeata09/8.jpg';
import lifeata09_9 from '../Assets/Images/lifeata09/9.jpg';
import lifeata09_10 from '../Assets/Images/lifeata09/10.jpg';
import lifeata09_11 from '../Assets/Images/lifeata09/11.jpg';
import lifeata09_12 from '../Assets/Images/lifeata09/12.jpg';

const images = [
  { src: lifeata09_1, link: '#' },
  { src: lifeata09_2, link: '#' },
  { src: lifeata09_3, link: '#' },
  { src: lifeata09_4, link: '#' },
  { src: lifeata09_5, link: '#' },
  { src: lifeata09_6, link: '#' },
  { src: lifeata09_7, link: '#' },
  { src: lifeata09_8, link: '#' },
  { src: lifeata09_9, link: '#' },
  { src: lifeata09_10, link: '#' },
  { src: lifeata09_11, link: '#' },
  { src: lifeata09_12, link: '#' },
];

const LifeAtA09 = () => {
      
  useEffect(() => {  
    Aos.init({duration: 400});
    }, []);

  return (
    <div className='LifeAtA09Row'>
      {images.map((image, index) => (
        <div className='LifeAtA09Col' key={index} data-aos='zoom-in'>
          <Link to={image.link}>
            <img src={image.src} alt={`Life at A09 ${index + 1}`} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LifeAtA09;
