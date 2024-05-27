import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SVGCurveLine from '../Hooks/SVGCurveLine'; 

// Images
import godrej from '../Assets/Images/logos/godrej.jpg';
import lakme from '../Assets/Images/logos/lakme.jpg';
import rgi from '../Assets/Images/logos/rgi.jpg';
import samsonite from '../Assets/Images/logos/samsonite.jpg';
import starWars from '../Assets/Images/logos/star-wars.jpg';
import tataMotors from '../Assets/Images/logos/tata-motors.jpg';
import tommy from '../Assets/Images/logos/tommy.jpg';
// Images end

const LogosSlider = () => {

    useEffect(() => {  
    gsap.registerPlugin(ScrollTrigger);

        
      const tlLogo = gsap.timeline({
        duration: 0.1,
        scrollTrigger: {
          trigger: ".hWorkLogos",
          toggleActions: "restart none none none",
          start: "top 90%",
          end: "+=30%",
          scrub: true,
        },
      });
      tlLogo.to(".hWorkLogos .strokeB", { width: '100%'})
      .to(".hWorkLogos .strokeB", { top: '0%', bottom: 0, })
     
         
      const tlLogo2 = gsap.timeline({
        duration: 0.1,
        scrollTrigger: {
          trigger: ".hWorkLogos",
          toggleActions: "restart none none none",
          start: "top 70%",
          end: "+=30%",
          scrub: true,
        },
      });
      tlLogo2.to(".hWorkLogos .LogosSlider-slick", { clipPath: 'inset(0% 0 0% 0)'});
       
   
   

    return () => {
        ScrollTrigger.getAll().forEach(trigger => {
            trigger.kill();
        });
        };
    }, []);

    
  // Logos 
  const LogosSliders = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }
  ]};
  // Logos End


  return (
    <>
    {/* Work Logos */}
   
        <Slider {...LogosSliders} className="LogosSlider-slick slick-slider arrowLRC">
          <div className='item'> <img src={godrej} alt='godrej' /></div>
          <div className='item'> <img src={lakme} alt='lakme' /></div>
          <div className='item'> <img src={rgi} alt='rgi' /></div>
          <div className='item'> <img src={samsonite} alt='samsonite' /></div>
          <div className='item'> <img src={starWars} alt='starWars' /></div>
          <div className='item'> <img src={tataMotors} alt='tataMotors' /></div>
          <div className='item'> <img src={tommy} alt='tommy' /></div>
        </Slider>
                           
    {/* Work Logos End */}
    </>
  )
}

export default LogosSlider
