import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import RippleButton from '../Hooks/RippleButton';


// Images
import culture1 from '../Assets/Images/culture/culture1.jpg';
import culture2 from '../Assets/Images/culture/culture2.jpg';
import culture3 from '../Assets/Images/culture/culture3.jpg';
import culture4 from '../Assets/Images/culture/culture4.jpg';
import starY from '../Assets/Images/icons/star.png';
// Images end



const Social = () => {
 

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        return () => {
          ScrollTrigger.getAll().forEach(trigger => {
              trigger.kill();
          });
          };
      }, []);
    


  // CultureSlider
  const CultureSlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        infinite: true,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]};
  // CultureSlider



  return (
    <>
        <section className='Culture'><div className='container'>
        <div className='Heading center'>  
          <h2 className='sizeH1 uppercase'><span>Young</span><span><i className="iconF"><img src={starY} alt="Star Icon" /></i></span><span>Inclusive</span><span><i className="iconF"><img src={starY} alt="Star Icon" /></i></span><span>Diverse</span><span><i className="iconF"><img src={starY} alt="Star Icon" /></i></span><span>Creative</span></h2>
        </div>


        <Slider {...CultureSlider} className="CultureSlider-slick slick-slider arrowLRC">
          <div className='item'> <img src={culture1} alt='culture' /></div>
          <div className='item'> <img src={culture2} alt='culture' /></div>
          <div className='item'> <img src={culture3} alt='culture' /></div>
          <div className='item'> <img src={culture4} alt='culture' /></div>
        </Slider>


          <div className='CultureRow center'>
            <p>We’re building a culture of progressive thinking open minded folks<br/> who are well equipped to tackle the nuances of communicating with the thumb generation.</p>
            <div className='CultureRowBtn'>
              <RippleButton className="btnDark" to='/'><span>Our Culture</span></RippleButton>
              <RippleButton className="btnDark" to='/'><span>View Openings</span></RippleButton>
            </div>
          </div>

        </div></section>  
    </>
  )
}

export default Social
